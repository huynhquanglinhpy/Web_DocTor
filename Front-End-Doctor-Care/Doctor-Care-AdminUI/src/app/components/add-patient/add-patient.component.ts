import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { AddPatient } from 'src/app/models/add-patient';
import { AddPatientService } from './service/add-patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  hide3 = true;
  agree3 = false;

  data: AddPatient = new AddPatient();
  constructor(private storage: AngularFireStorage, private ser: AddPatientService, private router: Router) {

  }
  ngOnInit(): void {

  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    var date: any = event.value;
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    console.log(formattedDate)
    this.data.dateofbirth = formattedDate;
  }

  changeGender(value: any) {
    console.log(value)
    if (value === 1) {
      this.data.gender = true;
    }
    else {
      this.data.gender = false;
    }
  }

  onKeyNameBenhNhan(event: any) {
    this.data.fullName = event.target.value
  }
  onKeySDTBenhNhan(event: any) {
    this.data.sdt = event.target.value;
  }
  onKeyEmailBenhNhan(event: any) {
    this.data.email = event.target.value;
  }
  onKeyPasswordBenhNhan(event: any) {
    this.data.password = event.target.value;
  }
  onKeyCMNDBenhNhan(event: any) {
    this.data.cmnd = event.target.value;
  }
  onKeyDiaChiBenhNhan(event: any) {
    this.data.address = event.target.value;
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
            this.data.image_url = this.linkImageUrl;
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  exit() {
    this.router.navigateByUrl('/list-patients')
  }
  reset() {
    location.reload();
  }
  addPatient() {
    this.ser.doAddPatient(this.data).subscribe({
      next: res => {
        alert("Thêm thành công");
        this.router.navigateByUrl('/list-patients')
      },
      error: err => {
        alert("Thêm thất bại")
      }
    })
  }
}
