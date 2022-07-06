import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AllAboutDoctor } from 'src/app/models/all-about-doctor';
import { AllPatientHosobenhan } from 'src/app/models/all-patient-hosobenhan';
import { DoctorNewpass } from 'src/app/models/doctor-newpass';
import { RangeDateDoctorHosobenhan } from 'src/app/models/range-date-doctor-hosobenhan';
import { ModalDetailHosobenhanComponent } from '../modal-detail-hosobenhan/modal-detail-hosobenhan.component';
import { DetailDoctorService } from './service/detail-doctor.service';

@Component({
  selector: 'app-detail-doctor',
  templateUrl: './detail-doctor.component.html',
  styleUrls: ['./detail-doctor.component.css']
})
export class DetailDoctorComponent implements OnInit {
  constructor(private router: Router,
    private activeRoute: ActivatedRoute, public dialog: MatDialog, private ser: DetailDoctorService) { }
  data: AllAboutDoctor = new AllAboutDoctor();
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailDoctor());
  }
  id!: number;
  getDataFirst(iddoctor: number) {
    this.ser.getAllHoSoBenhAnBaseDoctorId(iddoctor).subscribe({
      next: res => {
        this.dataHoSoBenhAn = [];
        this.dataHoSoBenhAn = res
        console.log(this.dataHoSoBenhAn)
      }
    })
  }
  detailDoctor() {
    let checkidpatientexist = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidpatientexist) {
      let iddoctor = +this.activeRoute.snapshot.paramMap.get('id')!;
      this.ser.getAllAboutDoctor(iddoctor).subscribe({
        next: res => {
          this.data = res;
          this.id = iddoctor;
          this.getDataFirst(iddoctor)
        },
        error: err => {
          this.router.navigateByUrl('/list-doctors')
        }
      })
    }
    else {
      this.router.navigateByUrl('list-doctors');
    }
  }
  dataSend: RangeDateDoctorHosobenhan = new RangeDateDoctorHosobenhan();
  addEventStart(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    var date: any = event.value;
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    this.dataSend.start = formattedDate;
    console.log(formattedDate)
  }
  addEventEnd(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    var date: any = event.value;
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    this.dataSend.end = formattedDate;
    console.log(formattedDate)
  }
  dataHoSoBenhAn: AllPatientHosobenhan[] = []
  doSearch() {
    this.ser.getAllHoSoBenhAnBaseDoctorIdDateRange(this.id, this.dataSend).subscribe({
      next: res => {
        this.dataHoSoBenhAn = [];
        this.dataHoSoBenhAn = res;
      }
    })
  }
  doRefresh() {
    this.getDataFirst(this.id);
  }
  ChiTietHoSoBenhAn(item: AllPatientHosobenhan) {
    const dialogRef = this.dialog.open(ModalDetailHosobenhanComponent, {
      width: '550px',
      data: item.id
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  newpass: DoctorNewpass = new DoctorNewpass();
  onKeyNewPassword(event: any) {
    this.newpass.newpass = event.target.value;
  }
  UpdatePassword() {
    if (this.newpass.newpass.length >= 6) {
      this.ser.updateDoctorPass(this.id, this.newpass).subscribe({
        next: res => {
          alert("Thành công")
        },
        error: err => {
          alert("Thất bại")
        }
      })
    }
  }
}
