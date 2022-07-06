import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailApointment } from 'src/app/models/detail-apointment';
import { ModalDetailAppointmentService } from './service/modal-detail-appointment.service';

@Component({
  selector: 'app-modal-detail-appointment',
  templateUrl: './modal-detail-appointment.component.html',
  styleUrls: ['./modal-detail-appointment.component.css']
})
export class ModalDetailAppointmentComponent implements OnInit {
  id!: number;
  constructor(public dialogRef: MatDialogRef<ModalDetailAppointmentComponent>, @Inject(MAT_DIALOG_DATA) data: number, private ser: ModalDetailAppointmentService) {
    this.id = data;
  }
  data!: DetailApointment;
  ngOnInit(): void {
    this.ser.getDetailApointment(this.id).subscribe(this.getDatas());
  }
  getDatas() {
    return (data: any) => {
      this.data = data;
      console.log(data);
    }
  }
}
