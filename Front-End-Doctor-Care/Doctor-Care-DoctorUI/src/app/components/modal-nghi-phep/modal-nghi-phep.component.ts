import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { BacSiXinNghi } from 'src/app/models/bac-si-xin-nghi';
import { NghiPhepService } from './service/nghi-phep.service';

@Component({
  selector: 'app-modal-nghi-phep',
  templateUrl: './modal-nghi-phep.component.html',
  styleUrls: ['./modal-nghi-phep.component.css']
})
export class ModalNghiPhepComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalNghiPhepComponent>, private ser: NghiPhepService) { }
  data: BacSiXinNghi = new BacSiXinNghi();
  ngOnInit(): void {
  }
  onKeyDescription(event: any) {
    this.data.description = event.target.value;
  }
  addEventStart(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    var date: any = event.value;
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    this.data.date = formattedDate;
    console.log(formattedDate)
  }
  onNoClick() {
    this.dialogRef.close();
  }
  doNghiPhep() {
    this.ser.bacsiXinNghi(this.data).subscribe({
      next: res => {
        alert("Thành công");
        this.onNoClick();
      },
      error: err => {

      }
    })
  }
}
