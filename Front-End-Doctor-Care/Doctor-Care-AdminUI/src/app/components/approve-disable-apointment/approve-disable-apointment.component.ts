import { Component, OnInit } from '@angular/core';
import { EmailPatient } from 'src/app/models/email-patient';
import { UserCancelApointment } from 'src/app/models/user-cancel-apointment';
import { DisableApointmentService } from './service/disable-apointment.service';

@Component({
  selector: 'app-approve-disable-apointment',
  templateUrl: './approve-disable-apointment.component.html',
  styleUrls: ['./approve-disable-apointment.component.css']
})
export class ApproveDisableApointmentComponent implements OnInit {

  constructor(private ser: DisableApointmentService) { }
  data: UserCancelApointment[] = [];
  ngOnInit(): void {
    this.getDataFirst()
  }
  getDataFirst() {
    this.data = [];
    this.ser.getApointmentUserCancel().subscribe(this.getDatas());
  }
  getDatas() {
    return (data: any) => {
      this.data = [];
      this.data = data
    }
  }
  datasent: EmailPatient = new EmailPatient();
  onKeyName(event: any) {
    this.datasent.email = event.target.value;
    this.ser.searchApointmentUserCancel(this.datasent).subscribe(this.getDatas())

  }
  adminAporveHuy(item: UserCancelApointment) {
    this.ser.adminApproveApointmentUserCancel(item.id).subscribe({
      next: res => {
        this.getDataFirst();
      },
      error: err => {
        alert("Lỗi")
      }
    })
  }
}
