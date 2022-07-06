import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoSoBenhAn } from 'src/app/models/ho-so-benh-an';
import { HosobenhanService } from './service/hosobenhan.service';

@Component({
  selector: 'app-ho-so-benh-an',
  templateUrl: './ho-so-benh-an.component.html',
  styleUrls: ['./ho-so-benh-an.component.css']
})
export class HoSoBenhAnComponent implements OnInit {

  constructor(private ser: HosobenhanService, private router: Router) { }
  data: HoSoBenhAn[] = []
  ngOnInit(): void {
    this.ser.getHoSoBenhAn().subscribe(this.getData());
  }
  getData() {
    return (data: any) => {
      this.data = data;
    }
  }
  chitiet(item: HoSoBenhAn) {
    this.router.navigateByUrl('/detail-apointment/' + item.id);
  }
}
