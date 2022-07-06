import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NamePatient } from 'src/app/models/name-patient';
import { PatientTungKhambenh } from 'src/app/models/patient-tung-khambenh';
import { ListPatientsService } from './service/list-patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  constructor(private ser: ListPatientsService, private router: Router) { }
  data: PatientTungKhambenh[] = []
  name: NamePatient = new NamePatient();
  ngOnInit(): void {
    this.getDataFirst();
  }
  getDataFirst() {
    this.data = [];
    this.ser.getBenhNhanTungKhamBenh().subscribe({
      next: res => {
        this.data = res
      }
    })
  }
  onKeyNameEmailBenhNhan(event: any) {
    this.name.name_or_email = event.target.value;
    if (this.name.name_or_email.length > 0) {
      this.data = [];
      this.ser.getBenhNhanTungKhamBenhByName(this.name).subscribe({
        next: res => {
          this.data = res;
        }
      })
    }
    else {
      this.getDataFirst();
    }
  }
  showHistory(id: number) {
    this.router.navigateByUrl('/hoso/' + id)
  }
  DoRefresh() {
    this.getDataFirst()
  }
}
