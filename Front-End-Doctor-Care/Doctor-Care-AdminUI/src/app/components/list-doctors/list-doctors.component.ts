import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorInList } from 'src/app/models/doctor-in-list';
import { FindNameDoctor } from 'src/app/models/find-name-doctor';
import { DanhsachdoctorService } from './service/danhsachdoctor.service';









@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {

  constructor(private ser: DanhsachdoctorService, private router: Router) { }

  ngOnInit(): void {
    this.ser.getDanhSachDoctor().subscribe(this.getDatas());
  }
  doctors: DoctorInList[] = [];
  getDatas() {
    return (data: any) => {
      this.doctors = [];
      this.doctors = data;
      console.log(data);
    }
  }
  getId(event: any) {
    console.log(event.target.value)
  }
  editDoctor(id: number) {
    this.router.navigateByUrl('/editdoctor/' + id);
  }
  onKeyNameBacSi(event: any) {
    let data: FindNameDoctor = new FindNameDoctor();
    data.name = event.target.value;
    console.log(data)
    this.doctors = [];
    this.ser.getDanhSachDoctorByName(data).subscribe(this.getDatas());

  }
  addDoctor() {
    this.router.navigateByUrl('/add-doctor')
  }
  refreshDoctor() {
    let data: FindNameDoctor = new FindNameDoctor();
    data.name = ""
    this.doctors = [];
    this.ser.getDanhSachDoctorByName(data).subscribe(this.getDatas());
  }
  seeAboutDoctor(item: DoctorInList) {
    this.router.navigateByUrl('/doctor/' + item.id);
  }
  deletedoctor(id: number) {
    this.ser.deleteDoctor(id).subscribe({
      next: res => {
        this.doctors = [];
        this.ser.getDanhSachDoctor().subscribe(this.getDatas());
      }, error: err => {
        alert("Lỗi")
      }
    })
  }
}
