import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { finalize, Observable } from 'rxjs';
import { DoctorInList } from 'src/app/models/doctor-in-list';
import { Khoa } from 'src/app/models/khoa';
import { GetListKhoaService } from 'src/app/services/get-list-khoa.service';
import { runInThisContext } from 'vm';
import { AddDoctorService } from './service/add-doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  hide3 = true;
  agree3 = false;
  doctor: DoctorInList = new DoctorInList();
  constructor(private storage: AngularFireStorage, private ser: GetListKhoaService, private router: Router, private addDoctorSer: AddDoctorService) {

  }
  ngOnInit(): void {
    this.getListKhoas();
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
    this.doctor.dateofbirth = formattedDate;
    console.log(formattedDate)
  }

  changeGender(value: any) {
    if (value === 1)
      this.doctor.gender = true;
    else
      this.doctor.gender = false;
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
  onKeyPassBacSi(event: any) {
    this.doctor.password = event.target.value;
  }
  filePath!: string
  fb!: any;
  downloadURL!: Observable<string>;
  linkImageUrl: any;
  uploaded: boolean = false;
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
            this.doctor.image_url = this.linkImageUrl;
            this.uploaded = true;
            console.log(this.linkImageUrl);
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
  doAddDoctor() {
    if (!this.uploaded)
      this.doctor.image_url = "";
    this.addDoctorSer.doAddDoctor(this.doctor).subscribe({
      next: res => {
        this.router.navigateByUrl('/list-doctors');
      },
      error: err => {
        alert("Thiếu dữ liệu");
      }
    })
  }
}
