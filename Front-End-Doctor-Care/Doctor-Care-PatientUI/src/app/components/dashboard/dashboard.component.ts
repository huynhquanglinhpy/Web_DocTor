import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailPatient } from 'src/app/models/detail-patient';
import { TodayAppointment } from 'src/app/models/today-appointment';
import { ViewAppointmentService } from '../view-appointment/service/view-appointment.service';
import { DashboardService } from './service/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ser: DashboardService, private router: Router, private serViewApointmentToday: ViewAppointmentService) { }
  today_appointments: TodayAppointment[] = [];
  before_today_appointments: TodayAppointment[] = [];
  ngOnInit(): void {
    this.checkToken();
  }
  checkToken() {
    this.ser.checkTokenPatient().subscribe({
      next: res => {
        this.ser.checkDetailPatient().subscribe(this.getDatas());
        this.getListTodayAppointments();
      },
      error: err => {
        this.doLogout();
      }
    })
  }
  getListTodayAppointments() {
    this.serViewApointmentToday.getAppointmentsFromToday().subscribe(this.getDatasTodayApointment())
    this.serViewApointmentToday.getAppointmentsBeforeToday().subscribe(this.getDatasBeforeTodayApointment())
  }

  getDatasBeforeTodayApointment() {
    return (data: any) => {
      console.log(data)
      this.before_today_appointments = data;
      console.log(this.before_today_appointments)
    }
  }
  getDatasTodayApointment() {
    return (data: any) => {
      console.log(data)
      this.today_appointments = data;
      console.log(this.today_appointments)
    }
  }
  infoPatient!: DetailPatient;
  getDatas() {
    return (data: any) => {
      this.infoPatient = data;
    }
  }
  local: Storage = localStorage;
  doLogout() {
    this.local.removeItem("emailPatientLogin")
    this.local.removeItem("tokenPatientLogin")
    this.local.removeItem("patientImageUrl")
    window.location.href = '/';
  }
  huyApointment(item: TodayAppointment) {
    this.serViewApointmentToday.huyAppointment(item.id).subscribe({
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
    this.serViewApointmentToday.datlaiAppointment(item.id).subscribe({
      next: res => {
        this.today_appointments = [];
        this.getListTodayAppointments()
      },
      error: err => {
        alert("Đặt lại thất bại")
      }
    })
  }
  chitiet(item: TodayAppointment) {

  }

}
