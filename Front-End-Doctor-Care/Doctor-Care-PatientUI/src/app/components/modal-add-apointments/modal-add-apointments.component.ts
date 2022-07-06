import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Danhsachdoctor3freeday } from 'src/app/models/danhsachdoctor3freeday';
import { Danhsachdoctor3freedayInside } from 'src/app/models/danhsachdoctor3freeday-inside';
import { PatientDatLichKham } from 'src/app/models/patient-dat-lich-kham';
import { SessionToString } from 'src/app/models/session-to-string';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-modal-add-apointments',
  templateUrl: './modal-add-apointments.component.html',
  styleUrls: ['./modal-add-apointments.component.css']
})
export class ModalAddApointmentsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalAddApointmentsComponent>, @Inject(MAT_DIALOG_DATA) data: Danhsachdoctor3freeday, private doctorSer: DoctorService) { this.data = data }
  data!: Danhsachdoctor3freeday;
  ngOnInit(): void {
  }
  sessionToString: SessionToString[] = [];
  daySelected!: string;
  changeNgay(value: any) {
    console.log(value)
    let item: Danhsachdoctor3freedayInside = new Danhsachdoctor3freedayInside();
    item = this.data.danhSachBacSiFree3DayDTOList.find(x => x.day === value)!
    console.log(item)
    this.daySelected = item.day;
    this.sessionToString = [];
    item.session.forEach(x => {
      console.log(x)
      if (x) {
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
  }
  buoi!: boolean;
  changeBuoi(value: any) {
    console.log(value)
    this.buoi = value;
  }
  onNoClick() {
    this.dialogRef.close();
    console.log("d")
  }
  doAddApointment() {
    let data: PatientDatLichKham = new PatientDatLichKham();
    data.buoi = this.buoi;
    data.bacsiid = this.data.bacsiid;
    data.ngaykham = this.daySelected;
    console.log(data);
    this.doctorSer.doDatLichKham(data).subscribe({
      next: res => {
        this.dialogRef.close();
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
