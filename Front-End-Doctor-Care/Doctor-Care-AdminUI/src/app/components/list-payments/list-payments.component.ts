import { Component, OnInit } from '@angular/core';
import { Bienlaichuatratien } from 'src/app/models/bienlaichuatratien';
import { ListPaymentsService } from './service/list-payments.service';

@Component({
  selector: 'app-list-payments',
  templateUrl: './list-payments.component.html',
  styleUrls: ['./list-payments.component.css']
})
export class ListPaymentsComponent implements OnInit {

  constructor(private ser: ListPaymentsService) { }

  ngOnInit(): void {
    this.getDataFirst();
  }
  data: Bienlaichuatratien[] = [];
  getDataFirst() {
    this.data = [];
    this.ser.getDanhSachBienLaiChuaTraTien().subscribe(this.getData())
  }
  onKeyId(event: any) {
    this.data = []

    let input: number = event.target.value;
    if (input.toString().length === 0) {
      this.getDataFirst();
    }
    else {
      this.ser.getDanhSachBienLaiChuaTraTienBaseonId(event.target.value).subscribe(this.getData())
    }
  }
  getData() {
    return (data: any) => {
      this.data = data
      console.log(this.data)
    }
  }
  getId(event: any) {
    console.log(event.target.value)
  }
  doRefresh() { }
  tratien(id: number) {
    this.ser.thanhtoanhoadon(id).subscribe({
      next: res => {
        this.getDataFirst();
      },
    })
  }
}
