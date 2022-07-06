import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllPatientHosobenhan } from 'src/app/models/all-patient-hosobenhan';
import { GetDetailHosobenhanService } from './service/get-detail-hosobenhan.service';

@Component({
  selector: 'app-modal-detail-hosobenhan',
  templateUrl: './modal-detail-hosobenhan.component.html',
  styleUrls: ['./modal-detail-hosobenhan.component.css']
})
export class ModalDetailHosobenhanComponent implements OnInit {
  id!: number;
  constructor(public dialogRef: MatDialogRef<ModalDetailHosobenhanComponent>, @Inject(MAT_DIALOG_DATA) data: number, private ser: GetDetailHosobenhanService) {
    this.id = data;
  }
  data: AllPatientHosobenhan = new AllPatientHosobenhan();
  ngOnInit(): void {
    this.ser.getHoSoBenhAnId(this.id).subscribe({
      next: res => {
        this.data = res;
        console.log(this.data)
      }
    })
  }

}
