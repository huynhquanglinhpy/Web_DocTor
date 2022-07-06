import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AllAboutPatient } from 'src/app/models/all-about-patient';
import { AllPatientHosobenhan } from 'src/app/models/all-patient-hosobenhan';
import { ModalDetailHosobenhanComponent } from '../modal-detail-hosobenhan/modal-detail-hosobenhan.component';
import { DetailPatientService } from './service/detail-patient.service';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css']
})
export class DetailPatientComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute: ActivatedRoute, private ser: DetailPatientService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailPatient());
  }
  data: AllAboutPatient = new AllAboutPatient();
  detailPatient() {
    let checkidpatientexist = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidpatientexist) {
      let idpatient = +this.activeRoute.snapshot.paramMap.get('id')!;
      this.ser.getAllAboutPatient(idpatient).subscribe({
        next: res => {
          this.data = res
          console.log(this.data)
        },
        error: err => {
          this.router.navigateByUrl('list-patients');
        }
      });
    }
    else {
      this.router.navigateByUrl('list-patients');
    }
  }
  ChiTietHoSoBenhAn(item: AllPatientHosobenhan) {
    const dialogRef = this.dialog.open(ModalDetailHosobenhanComponent, {
      width: '550px',
      data: item.id
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
