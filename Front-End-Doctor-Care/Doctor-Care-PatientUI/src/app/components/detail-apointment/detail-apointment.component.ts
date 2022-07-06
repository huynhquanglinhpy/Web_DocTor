import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailApointment } from 'src/app/models/detail-apointment';
import { DetailApointmentService } from './service/detail-apointment.service';

@Component({
  selector: 'app-detail-apointment',
  templateUrl: './detail-apointment.component.html',
  styleUrls: ['./detail-apointment.component.css']
})
export class DetailApointmentComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute: ActivatedRoute, private ser: DetailApointmentService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailApointment());
  }
  id!: number;
  detailApointment() {
    let checkidexist = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidexist) {
      let idpatient = +this.activeRoute.snapshot.paramMap.get('id')!;
      this.id = idpatient;
      this.ser.getDetailApointment(idpatient).subscribe(this.getDatas());
    }
    else {
      this.router.navigateByUrl('/past-appointment');
    }
  }
  data!: DetailApointment;
  getDatas() {
    return (data: any) => {
      this.data = data;
      console.log(data);
    }
  }
}
