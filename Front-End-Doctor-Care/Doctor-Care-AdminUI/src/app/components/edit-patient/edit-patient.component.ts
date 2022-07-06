import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { EditPatient } from 'src/app/models/edit-patient';
import { EditPatientService } from './service/edit-patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  hide3 = true;
  agree3 = false;
  gender: number = -1;
  dateOfBirth = new FormControl(new Date())
  constructor(private storage: AngularFireStorage, private router: Router,
    private activeRoute: ActivatedRoute, private ser: EditPatientService) {

  }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.getPatientId());
  }
  getPatientId() {
    let checkPatientId = this.activeRoute.snapshot.paramMap.has('id');
    if (checkPatientId) {
      let patientId = +this.activeRoute.snapshot.paramMap.get('id')!;
      this.ser.getPatientEditById(patientId).subscribe(this.getDatas());
    }
    else {
      this.router.navigateByUrl('/list-patients')
    }
  }
  patient: EditPatient = new EditPatient();
  getDatas() {
    return (data: any) => {
      console.log(data)
      this.patient = data;
      if (this.patient.gender) {
        this.gender = 1;
      }
      else
        this.gender = 0;
      const format = 'yyyy-MM-dd';
      const locale = 'en-US';
      const formattedDate = formatDate(this.patient.date_of_birth, format, locale);
      this.patient.date_of_birth = formattedDate
      let newDate = new Date(formattedDate);
      this.dateOfBirth = new FormControl(newDate);
      if (this.patient.status) {
        this.status = 1;
      }
      else {
        this.status = 0;
      }
      console.log(this.patient)
    }
  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    var date: any = event.value;
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    console.log(formattedDate)
    this.patient.date_of_birth = formattedDate;
  }

  changeGender(value: any) {
    console.log(value)
    this.patient.gender = value;
  }
  status!: number;
  changeStatus(value: any) {
    if (value === 1) {
      this.patient.status = true;
    }
    else {
      this.patient.status = false;
    }
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
            console.log(this.linkImageUrl);
            this.uploaded = true;
            this.patient.image_url = this.linkImageUrl;
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
  doExit() {
    this.router.navigateByUrl('/list-patients')
  }
  doReset() {
    location.reload();
  }
  doUpdatePatient() {
    this.ser.doUpdatePatient(this.patient).subscribe({
      next: res => {
        alert("Update thành công")
        location.reload();
      },
      error: err => {
        alert("Update thất bại")
      }
    })
  }
  onKeyCMNDPatient(event: any) {
    this.patient.cmnd = event.target.value
  }
  onKeyNameBenhNhan(event: any) {
    this.patient.fullName = event.target.value
  }
  onKeySDTBenhNhan(event: any) {
    this.patient.sdt = event.target.value
  }
  onKeyEmailBenhNhan(event: any) {
    this.patient.email = event.target.value
  }
  onKeyPasswordBenhNhan(event: any) {
    this.patient.password = event.target.value
  }
  onKeyDiaChiBenhNhan(event: any) {
    this.patient.address = event.target.value
  }
}
