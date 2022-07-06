import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HoSoBenhAn } from 'src/app/models/ho-so-benh-an';
import { ModalDetailAppointmentComponent } from '../modal-detail-appointment/modal-detail-appointment.component';
import { HoSoBenhAnService } from './service/ho-so-benh-an.service';

@Component({
  selector: 'app-ho-so-benh-an',
  templateUrl: './ho-so-benh-an.component.html',
  styleUrls: ['./ho-so-benh-an.component.css']
})
export class HoSoBenhAnComponent implements OnInit {
  data: HoSoBenhAn[] = []
  constructor(private ser: HoSoBenhAnService, private router: Router,
    private activeRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailApointment());
  }
  id!: number;
  detailApointment() {
    let checkidexist = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidexist) {
      let idpatient = +this.activeRoute.snapshot.paramMap.get('id')!;
      this.id = idpatient;
      this.ser.getHoSoBenhAn(this.id).subscribe(this.getDatas());
    }
    else {
      this.router.navigateByUrl('/list-patients');
    }
  }
  getDatas() {
    return (data: any) => {
      this.data = data;
      console.log(data);
    }
  }
  chitiet(item: HoSoBenhAn) {
    const dialogRef = this.dialog.open(ModalDetailAppointmentComponent, {
      width: '650px',
      data: item.id
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
