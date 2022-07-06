import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditPatient } from 'src/app/models/edit-patient';
import { FindNamePatient } from 'src/app/models/find-name-patient';
import { PatientInList } from 'src/app/models/patient-in-list';
import { ListPatientsService } from './service/list-patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  constructor(private ser: ListPatientsService, private router: Router) { }

  ngOnInit(): void {
    this.ser.getDanhSachPatient().subscribe(this.getDatas());
  }
  patients: PatientInList[] = [];
  getDatas() {
    return (data: any) => {
      this.patients = [];
      this.patients = data;
      console.log(data);
    }
  }
  getId(event: any) {
    console.log(event.target.value)
  }
  addPatient() {
    this.router.navigateByUrl('/add-patient')
  }
  editPatient(id: any) {
    this.router.navigateByUrl('/editpatient/' + id)
  }
  disablePatient(id: number) {
    this.ser.disablePatient(id).subscribe({
      next: res => {
        alert("Thành công")
        this.ser.getDanhSachPatient().subscribe(this.getDatas());
      },
      error: err => {
        alert("Thất bại")
        console.log(err)
      }
    })
  }
  onKeyNameEmailBenhNhan(event: any) {
    let data: FindNamePatient = new FindNamePatient();
    data.name = event.target.value;
    this.patients = [];
    this.ser.getDanhSachPatientByName(data).subscribe(this.getDatas())
  }
  patientRefresh() {
    this.patients = [];
    this.ser.getDanhSachPatient().subscribe(this.getDatas());
  }
  seeHoSoBenhAnPatient(id: number) {
    this.router.navigateByUrl('/patient/' + id);
  }
}
