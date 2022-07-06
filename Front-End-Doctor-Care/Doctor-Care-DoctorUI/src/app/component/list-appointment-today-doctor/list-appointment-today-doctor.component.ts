import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodayDoctorApointment } from 'src/app/models/today-doctor-apointment';
import { ListComponentService } from './service/list-component.service';

@Component({
  selector: 'app-list-appointment-today-doctor',
  templateUrl: './list-appointment-today-doctor.component.html',
  styleUrls: ['./list-appointment-today-doctor.component.css']
})
export class ListAppointmentTodayDoctorComponent implements OnInit {

  constructor(private ser: ListComponentService, private router: Router) { }
  today_appointments: TodayDoctorApointment[] = [];
  ngOnInit(): void {
    this.getListTodayAppointments();
  }
  getListTodayAppointments() {
    this.ser.getTodayApointmentDoctor().subscribe(this.getDatas())
  }

  getDatas() {
    return (data: any) => {
      console.log(data)
      this.today_appointments = data;
    }
  }
  khambenh(item: TodayDoctorApointment) {
    this.router.navigateByUrl('/kham-benh/' + item.id)
  }
}
