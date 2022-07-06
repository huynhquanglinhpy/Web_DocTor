import { Component, OnInit } from '@angular/core';
import { BenhNhanTrongThang } from 'src/app/models/benh-nhan-trong-thang';
import { DashboardTop } from 'src/app/models/dashboard-top';
import { ThuocTrongThang } from 'src/app/models/thuoc-trong-thang';
import { DashboardService } from './service/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ser: DashboardService) { }
  top!: DashboardTop;
  mid: BenhNhanTrongThang[] = [];
  right: ThuocTrongThang[] = [];
  ngOnInit(): void {
    this.ser.getDashboardTop().subscribe(
      {
        next: res => {
          this.top = res
          this.ser.getDashboardMid().subscribe({
            next: res => {
              this.mid = res;
              this.ser.getDashboardRight().subscribe({
                next: res => {
                  this.right = res
                }
              })
            }
          })
        }
      }
    )
  }

}
