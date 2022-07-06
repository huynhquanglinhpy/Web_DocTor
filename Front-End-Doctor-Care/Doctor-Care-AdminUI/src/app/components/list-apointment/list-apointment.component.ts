import { Component, OnInit } from '@angular/core';
import { TodayApointment } from 'src/app/models/today-apointment';
import { ListApointmentService } from './service/list-apointment.service';

@Component({
  selector: 'app-list-apointment',
  templateUrl: './list-apointment.component.html',
  styleUrls: ['./list-apointment.component.css']
})
export class ListApointmentComponent implements OnInit {

  constructor(private ser: ListApointmentService) { }
  data: TodayApointment[] = [];
  ngOnInit(): void {
    this.ser.getTodayAppointments().subscribe(this.getDatas());
  }
  getDatas() {
    return (data: any) => {
      this.data = data;
    }
  }
}
