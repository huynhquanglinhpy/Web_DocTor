import { Component, OnInit } from '@angular/core';
import { TodayAppointment } from 'src/app/models/today-appointment';
import { ViewAppointmentService } from './service/view-appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private ser: ViewAppointmentService) { }
  today_appointments: TodayAppointment[] = [];
  ngOnInit(): void {
    this.getListTodayAppointments();
  }
  getListTodayAppointments() {
    this.ser.getTodayAppointments().subscribe(this.getDatas())
  }

  getDatas() {
    return (data: any) => {
      console.log(data)
      this.today_appointments = data;
    }
  }
  huyTodayAppointment(id: number) {
    this.ser.huyAppointment(id).subscribe({
      next: res => {
        this.today_appointments = [];
        this.getListTodayAppointments()
      },
      error: err => {
        alert("Hủy thất bại")
      }
    })
  }
  datlailich(item: TodayAppointment) {
    this.ser.datlaiAppointment(item.id).subscribe({
      next: res => {
        this.today_appointments = [];
        this.getListTodayAppointments()
      },
      error: err => {
        alert("Đặt lại thất bại")
      }
    })
  }
}
