import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalChangePasswordComponent } from '../modal-change-password/modal-change-password.component';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit {
  appointmentshow: boolean = false;
  doctorshow: boolean = false;
  patientshow: boolean = false;
  paymentshow: boolean = false;
  namePatient!: string;
  imageUrl!: string;
  localStore: Storage = localStorage;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.namePatient = localStorage.getItem('emailPatientLogin')!
    console.log(this.namePatient);
    this.imageUrl = localStorage.getItem('patientImageUrl')!;
    console.log(this.imageUrl)
    if (this.imageUrl.includes("undefined"))
      this.imageUrl = "https://hoannkd00368.files.wordpress.com/2016/11/links.jpg";
  }
  mouseHover(e: any) {

  }
  mouseOut(e: any) {

  }
  openAppointment() {
    this.appointmentshow = !this.appointmentshow;
  }
  openshowdoctor() {
    this.doctorshow = !this.doctorshow;
  }
  openshowpatient() {
    this.patientshow = !this.patientshow;
  }
  openshowPayment() {
    this.paymentshow = !this.paymentshow;
  }
  gotohome() {
    this.router.navigateByUrl('/');
  }
  local: Storage = localStorage;
  doLogout() {
    this.local.removeItem("emailPatientLogin")
    this.local.removeItem("tokenPatientLogin")
    this.local.removeItem("patientImageUrl")
    window.location.href = '/';
  }
  doiMatKhau() {
    const dialogRef = this.dialog.open(ModalChangePasswordComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.doLogout();
    });
  }
}
