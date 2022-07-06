import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UpdatePassword } from 'src/app/models/update-password';
import { ChangePasswordService } from './service/change-password.service';

@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styleUrls: ['./modal-change-password.component.css']
})
export class ModalChangePasswordComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalChangePasswordComponent>, private ser: ChangePasswordService) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
    console.log("d")
  }
  data: UpdatePassword = new UpdatePassword();
  onKeyMKMoi(event: any) {
    this.data.newpass = event.target.value;
  }
  onKeyMKCu(event: any) {
    this.data.oldpass = event.target.value;
  }
  doChangePassword() {
    console.log(this.data)
    this.ser.changePass(this.data).subscribe({
      next: res => {
        this.onNoClick();
      },
      error: err => {
        alert("Lỗi")
      }
    })
  }
}
