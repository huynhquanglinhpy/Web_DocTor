import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { Khoa } from 'src/app/models/khoa';
import { LichLamViecbacsi } from 'src/app/models/lich-lam-viecbacsi';
import { PatientDatLichKham } from 'src/app/models/patient-dat-lich-kham';
import { SessionToString } from 'src/app/models/session-to-string';
import { DoctorService } from 'src/app/service/doctor.service';
import { KhoaService } from 'src/app/service/khoa.service';

@Component({
  selector: 'app-add-appointment-layout',
  templateUrl: './add-appointment-layout.component.html',
  styleUrls: ['./add-appointment-layout.component.css']
})
export class AddAppointmentLayoutComponent implements OnInit {

  constructor(private ser: KhoaService, private doctorSer: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.getListKhoas();
  }
  getListKhoas() {
    this.ser.getDanhSachKhoa().subscribe(this.getDatas());
  }
  khoas: Khoa[] = [];
  doctors: Doctor[] = [];
  getDatas() {
    return (data: any) => {
      console.log(data)
      this.khoas = data;
    }
  }
  lichlamviec: LichLamViecbacsi[] = [];
  khoaid: number = -1;
  changeKhoa(value: any) {
    this.khoaid = +value;
    this.lichlamviec = [];
    this.doctorSer.getDanhSachBacsiBaseonKhoaid(this.khoaid).subscribe(this.getDatasDoctor());
  }
  getDatasDoctor() {
    return (data: any) => {
      this.doctors = data;
    }
  }
  doctorid: number = -1;

  changeDoctor(value: any) {
    this.doctorid = +value;
    this.doctorSer.getLichLamViecBacSi(this.doctorid).subscribe(this.getDatsLichLamViec());
  }
  getDatsLichLamViec() {
    return (data: any) => {
      this.lichlamviec = data;
      console.log(this.lichlamviec)
    }
  }
  session: boolean[] = [];
  sessionToString: SessionToString[] = [];
  ngay!: string;
  changeNgay(value: any) {
    this.ngay = value;
    this.session = this.lichlamviec.find(x => x.date === value)?.session!;
    this.session.forEach(obj => {
      if (obj) {
        let data: SessionToString = new SessionToString();
        data.buoi = "Sáng"
        data.buoiInBoolean = true;
        this.sessionToString.push(data);
      }
      else {
        let data: SessionToString = new SessionToString();
        data.buoi = "Chiều"
        data.buoiInBoolean = false;
        this.sessionToString.push(data);
      }
    })
    console.log(this.sessionToString)
  }
  buoi!: boolean;
  changeBuoi(value: any) {
    this.buoi = value;
  }
  doExit() {
    this.router.navigateByUrl('/add-appointment')
  }
  doReset() {
    location.reload();
  }
  doAddApointment() {
    let data: PatientDatLichKham = new PatientDatLichKham();
    data.buoi = this.buoi;
    data.bacsiid = this.doctorid;
    data.ngaykham = this.ngay;
    console.log(data);
    this.doctorSer.doDatLichKham(data).subscribe({
      next: res => {
        alert('Đặt lịch khám thành công')
        this.router.navigateByUrl('/')
      },
      error: err => {
        if (err.statuscode === 403) {
          this.doLogout();

        }
        else {
          alert("Đặt thất bại")
          // location.reload();
        }
      }
    })
  }
  local: Storage = localStorage;
  doLogout() {
    this.local.removeItem("emailAdminLogin")
    this.local.removeItem("tokenAdminLogin")
    this.local.removeItem("adminImageUrl")
    window.location.href = '/';
  }
}
