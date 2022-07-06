import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorInList } from 'src/app/models/doctor-in-list';
import { FindNameDoctor } from 'src/app/models/find-name-doctor';
import { ListDoctorOnKhoaService } from './service/list-doctor-on-khoa.service';

@Component({
  selector: 'app-list-doctor-on-khoa',
  templateUrl: './list-doctor-on-khoa.component.html',
  styleUrls: ['./list-doctor-on-khoa.component.css']
})
export class ListDoctorOnKhoaComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router, private ser: ListDoctorOnKhoaService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailKhoa());
  }
  detailKhoa() {
    let checkidpatientexist = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidpatientexist) {
      let idkhoa = +this.activeRoute.snapshot.paramMap.get('id')!;
      this.id = idkhoa;
      this.ser.getDanhSachDoctor(this.id).subscribe(this.getData())
    }
    else {
      this.router.navigateByUrl('list-doctors');
    }
  }
  getData() {
    return (data: any) => {
      this.doctors = data;
      console.log(this.doctors)
    }
  }
  id!: number;
  doctors: DoctorInList[] = [];
  refreshDoctor() {
    this.detailKhoa()
  }
  data: FindNameDoctor = new FindNameDoctor()
  onKeyNameBacSi(event: any) {
    this.data.name = event.target.value;
    this.ser.getDanhSachDoctorByName(this.data, this.id).subscribe(this.getData())
  }
  seeAboutDoctor(item: DoctorInList) {
    this.router.navigateByUrl('/doctor/' + item.id);
  }
}
