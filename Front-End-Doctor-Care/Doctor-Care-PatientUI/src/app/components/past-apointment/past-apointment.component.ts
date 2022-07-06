import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PastApointment } from 'src/app/models/past-apointment';
import { PastApointmentService } from './service/past-apointment.service';

@Component({
  selector: 'app-past-apointment',
  templateUrl: './past-apointment.component.html',
  styleUrls: ['./past-apointment.component.css']
})
export class PastApointmentComponent implements OnInit {

  constructor(private ser: PastApointmentService, private router: Router) { }

  ngOnInit(): void {
    this.getResponse();
  }
  getResponse() {
    this.ser.getPastAppointments().subscribe(this.getDatas())
  }
  data: PastApointment[] = []
  getDatas() {
    return (data: any) => {
      console.log(data)
      this.data = data;
    }
  }
  detailApointment(data: PastApointment) {
    if (data.check)
      this.router.navigateByUrl('/detail-apointment/' + data.id);
  }
}
