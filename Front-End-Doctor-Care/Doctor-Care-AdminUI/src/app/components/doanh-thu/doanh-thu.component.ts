import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DoanhThuTheobacsi } from 'src/app/models/doanh-thu-theobacsi';
import { RangeDateDoctorHosobenhan } from 'src/app/models/range-date-doctor-hosobenhan';
import { DoanhThuService } from './service/doanh-thu.service';

@Component({
  selector: 'app-doanh-thu',
  templateUrl: './doanh-thu.component.html',
  styleUrls: ['./doanh-thu.component.css']
})
export class DoanhThuComponent implements OnInit {

  constructor(private ser: DoanhThuService) { }

  ngOnInit(): void {
  }
  dataSend: RangeDateDoctorHosobenhan = new RangeDateDoctorHosobenhan();
  addEventStart(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    var date: any = event.value;
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    this.dataSend.start = formattedDate;
    console.log(formattedDate)
  }
  addEventEnd(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    var date: any = event.value;
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    this.dataSend.end = formattedDate;
    console.log(formattedDate)
  }
  data: DoanhThuTheobacsi[] = [];
  thisyear() {
    this.data = [];
    this.ser.getdoanhthuthisyear().subscribe({
      next: res => {
        this.data = res;
        console.log(this.data)
      }
    })
  }
  thismonth() {
    this.data = [];
    this.ser.getdoanhthuthismonth().subscribe({
      next: res => {
        this.data = res;
        console.log(this.data)
      }
    })
  }
  thisday() {
    this.data = [];
    this.ser.getdoanhthutheongayhientai().subscribe({
      next: res => {
        this.data = res;
        console.log(this.data)
      }
    })
  }
  doSearch() {
    this.data = [];
    this.ser.getdoanhthutheodaterange(this.dataSend).subscribe({
      next: res => {
        this.data = res
      }
    })
  }
}
