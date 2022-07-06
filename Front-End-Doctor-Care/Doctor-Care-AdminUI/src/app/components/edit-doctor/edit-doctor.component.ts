import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { DoctorInList } from 'src/app/models/doctor-in-list';
import { Khoa } from 'src/app/models/khoa';
import { GetListKhoaService } from 'src/app/services/get-list-khoa.service';
import { EditDoctorService } from './edit-doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  hide3 = true;
  agree3 = false;
  constructor(private storage: AngularFireStorage, private ser: GetListKhoaService, private router: Router,
    private activeRoute: ActivatedRoute, private serEditDoctor: EditDoctorService) {

  }

  gender: number = -1;
  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(() => this.getDoctorId());
    this.getListKhoas();
  }
  doctor: DoctorInList = new DoctorInList();
  dateOfBirth = new FormControl(new Date())
  getDoctorId() {
    let checkDoctorId = this.activeRoute.snapshot.paramMap.has('id');
    if (checkDoctorId) {
      let doctorId = +this.activeRoute.snapshot.paramMap.get('id')!;
      this.serEditDoctor.getDoctorEditById(doctorId).subscribe(
        {
          next: res => {
            this.doctor = res;
            if (this.doctor.gender) {
              this.gender = 1;
            }
            else
              this.gender = 0;
            const format = 'yyyy/MM/dd';
            const locale = 'en-US';
            const formattedDate = formatDate(this.doctor.dateofbirth, format, locale);
            let newDate = new Date(formattedDate);
            this.dateOfBirth = new FormControl(newDate);
            console.log(this.doctor)
          },
          error: err => {
            this.router.navigateByUrl('/list-doctors')
          }
        }
      )
    }
    else {
      this.router.navigateByUrl('/list-doctors')
    }
  }
  getListKhoas() {
    this.ser.getDanhSachKhoa().subscribe(this.getDatas());
  }
  khoas: Khoa[] = [];
  getDatas() {
    return (data: any) => {
      this.khoas = data;
    }
  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    var date: any = event.value;
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    console.log(formattedDate)
    this.doctor.dateofbirth = formattedDate
    console.log(this.doctor.dateofbirth);
  }

  changeGender(value: any) {
    this.doctor.gender = value;
  }
  changeKhoa(value: any) {
    console.log(value)
    this.doctor.makhoa = value;
  }

  onKeyNameBacSi(event: any) {
    console.log(event.target.value);
    this.doctor.fullname = event.target.value;
  }
  onKeySDTBacSi(event: any) {
    this.doctor.sdt = event.target.value;
  }
  onKeyEmailBacSi(event: any) {
    this.doctor.email = event.target.value;
  }
  onKeyBangcapBacSi(event: any) {
    this.doctor.bangcap = event.target.value;
  }
  onKeyCMNDBacSi(event: any) {
    this.doctor.cmnd = event.target.value;
  }
  filePath!: string
  fb!: any;
  downloadURL!: Observable<string>;
  linkImageUrl: any;
  upload(event: any) {
    console.log(this.filePath)
    // this.afStorage.upload('/images' + Math.random() + this.filePath, this.filePath);
    this.storage.upload('/images' + Math.random() + this.filePath, this.filePath)
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            this.linkImageUrl = this.fb
            console.log(this.linkImageUrl);
            this.doctor.image_url = this.linkImageUrl;
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
  doReset() {
    location.reload();
  }
  doExit() {
    this.router.navigateByUrl('/list-doctors')
  }
  doUpdateDoctor() {
    this.serEditDoctor.doUpdateDoctor(this.doctor).subscribe({
      next: res => {
        alert('Update thành công')
        location.reload();
      },
      error: err => {
        alert('Update that bại')
      }
    })
  }
}
