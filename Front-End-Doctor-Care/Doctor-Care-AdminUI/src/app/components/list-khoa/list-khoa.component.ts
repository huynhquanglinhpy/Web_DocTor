import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InforKhoa } from 'src/app/models/infor-khoa';
import { TenKhoa } from 'src/app/models/ten-khoa';
import { ListKhoaService } from './service/list-khoa.service';

@Component({
  selector: 'app-list-khoa',
  templateUrl: './list-khoa.component.html',
  styleUrls: ['./list-khoa.component.css']
})
export class ListKhoaComponent implements OnInit {

  constructor(private ser: ListKhoaService, private router: Router) { }
  danhsachkhoa: InforKhoa[] = [];
  ngOnInit(): void {
    this.getDataFirst()
  }
  getDataFirst() {
    this.ser.getDanhSachKhoa().subscribe(
      this.getData()
    )
  }
  getData() {
    return (data: any) => {
      this.danhsachkhoa = []
      this.danhsachkhoa = data

    }
  }
  doRefresh() {
    this.getDataFirst()
  }
  seeAboutDoctorKhoa(item: InforKhoa) {
    this.router.navigateByUrl('/khoa/' + item.id)
  }
  tenkhoa: TenKhoa = new TenKhoa()
  onKeyNameKhoa(event: any) {
    this.tenkhoa.name = event.target.value
    if (this.tenkhoa.name.length > 0) {
      this.ser.getDanhSachKhoaTheoTen(this.tenkhoa).subscribe(
        this.getData()
      )
    }
    else {
      this.getDataFirst()
    }
  }
}
