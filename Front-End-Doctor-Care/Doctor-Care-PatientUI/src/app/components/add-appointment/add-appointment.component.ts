import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Danhsachdoctor3freeday } from 'src/app/models/danhsachdoctor3freeday';
import { ModalAddApointmentsComponent } from '../modal-add-apointments/modal-add-apointments.component';
import { AddAppointmentService } from './service/add-appointment.service';



@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private router: Router, private ser: AddAppointmentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListDoctorFree();
  }
  gotoaddapointment() {
    this.router.navigateByUrl('/add-appointment-layout')
  }
  getListDoctorFree() {
    this.ser.getDanhBacSi3day().subscribe(this.getDatas())
  }
  data: Danhsachdoctor3freeday[] = []
  getDatas() {
    return (data: any) => {
      console.log(data)
      this.data = data;
    }
  }
  showDoAddAppointment(item: Danhsachdoctor3freeday) {
    const dialogRef = this.dialog.open(ModalAddApointmentsComponent, {
      width: '450px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      this.data = []
      this.getListDoctorFree()
    });
  }
}

