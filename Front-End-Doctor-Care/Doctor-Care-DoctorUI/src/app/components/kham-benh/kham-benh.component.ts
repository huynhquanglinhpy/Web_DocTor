import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KhamBenhDoctor } from 'src/app/models/kham-benh-doctor';
import { TenThuoc } from 'src/app/models/ten-thuoc';
import { Thuoc } from 'src/app/models/thuoc';
import { ThuocChoKhamBenh } from 'src/app/models/thuoc-cho-kham-benh';
import { KhamBenhService } from './service/kham-benh.service';

@Component({
  selector: 'app-kham-benh',
  templateUrl: './kham-benh.component.html',
  styleUrls: ['./kham-benh.component.css']
})
export class KhamBenhComponent implements OnInit {

  constructor(private ser: KhamBenhService, private router: Router, private activeRoute: ActivatedRoute) { }
  datas: Thuoc[] = []
  dataAdd: KhamBenhDoctor = new KhamBenhDoctor()
  dataThuoChoKhamBenh: ThuocChoKhamBenh[] = [];
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.getLichHenId());
  }
  id!: number;
  getLichHenId() {
    let lichhenid = this.activeRoute.snapshot.paramMap.has('lichhenid');
    if (lichhenid) {
      this.id = +this.activeRoute.snapshot.paramMap.get('lichhenid')!;
    }
    else {
      this.router.navigateByUrl('/list-apointment')
    }

  }
  onKeyTenThuoc(event: any) {
    if (event.target.value === "") {
      this.datas = []
    }
    else {
      let dataTenThuoc: TenThuoc = new TenThuoc();
      dataTenThuoc.name = event.target.value;
      this.ser.getMedicineByName(dataTenThuoc).subscribe(this.getDatas())
    }
  }
  doGetDataFirst() {
    this.ser.getMedicine().subscribe(this.getDatas());
  }
  getDatas() {
    return (data: any) => {
      this.datas = data;
    }
  }
  onKeySoNgayTaiKham(event: any) {
    this.dataAdd.songaytaikham = +event.target.value;
  }
  onKeyTien(event: any) {
    this.dataAdd.tien_kham = +event.target.value;
  }
  onKeyChuanDoan(event: any) {
    this.dataAdd.chuandoan = event.target.value
  }
  addThuoc(item: Thuoc) {
    let data: ThuocChoKhamBenh = new ThuocChoKhamBenh();
    let dataExists = this.dataThuoChoKhamBenh.find(x => x.thuocid === item.id);
    if (dataExists !== null) {
      data.thuocid = item.id;
      data.quantity = 1
      data.name = item.name;
      data.price = item.price;
      this.dataThuoChoKhamBenh.push(data);
    }
  }
  xoaThuoc(item: ThuocChoKhamBenh) {
    let dataExists = this.dataThuoChoKhamBenh.find(x => x.thuocid === item.thuocid);
    if (dataExists !== null) {
      this.dataThuoChoKhamBenh = this.dataThuoChoKhamBenh.filter(x => x.thuocid !== item.thuocid)
    }
  }
  onKeySoLuong(event: any, item: ThuocChoKhamBenh) {
    if (event.target.value > 0) {
      let dataExists: ThuocChoKhamBenh = this.dataThuoChoKhamBenh.find(x => x.thuocid === item.thuocid)!;
      if (dataExists !== null) {
        let pricePerUnit = +(dataExists.price / dataExists.quantity);
        dataExists.quantity = event.target.value;
        dataExists.price = pricePerUnit * dataExists.quantity;
      }
    }
  }
  doAdd() {
    this.dataAdd.thuocChoKhamBenhDTOList = this.dataThuoChoKhamBenh;
    this.ser.doKhamBenh(this.dataAdd, this.id).subscribe({
      next: res => {
        this.router.navigateByUrl('/list-apointment')
      },
      error: err => {
        alert("Lỗi")
      }
    })
  }
  doExit() {
    this.router.navigateByUrl('/list-apointment')
  }
}
