import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ForgotPassword } from 'src/app/models/forgot-password';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-modal-forgot-password',
  templateUrl: './modal-forgot-password.component.html',
  styleUrls: ['./modal-forgot-password.component.css']
})
export class ModalForgotPasswordComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalForgotPasswordComponent>, private ser: ForgotPasswordService) { }

  ngOnInit(): void {
  }
  data: ForgotPassword = new ForgotPassword();
  onKeyEmail(event: any) {
    this.data.email = event.target.value;
  }
  doChangePassword() {
    this.ser.changePass(this.data).subscribe({
      next: res => {
        alert("Kiểm tra email nha bạn")
        this.onNoClick();
      },
      error: err => {
        alert("Lỗi")
      }
    })
  }
  onNoClick() {
    this.dialogRef.close();
    console.log("d")
  }
}
