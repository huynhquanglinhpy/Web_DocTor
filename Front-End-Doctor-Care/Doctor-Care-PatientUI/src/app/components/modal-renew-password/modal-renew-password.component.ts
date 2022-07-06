import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgotPassword } from 'src/app/models/forgot-password';
import { UpdatePassword } from 'src/app/models/update-password';
import { RenewpasswordService } from '../renewpassword/service/renewpassword.service';

@Component({
  selector: 'app-modal-renew-password',
  templateUrl: './modal-renew-password.component.html',
  styleUrls: ['./modal-renew-password.component.css']
})
export class ModalRenewPasswordComponent implements OnInit {
  token!: string;
  constructor(public dialogRef: MatDialogRef<ModalRenewPasswordComponent>, @Inject(MAT_DIALOG_DATA) data: string, private ser: RenewpasswordService, private router: Router) {
    this.token = data
  }

  ngOnInit(): void {
  }
  data: UpdatePassword = new UpdatePassword();
  onKeyPassword(event: any) {
    this.data.newpass = event.target.value;
  }
  doChangePassword() {
    console.log(this.data)
    this.ser.renewPass(this.data, this.token).subscribe(
      {
        next: res => {
          this.dialogRef.close();
          this.router.navigateByUrl('/login')
        },
        error: err => {
          alert("Kiem tra lai token")
        }
      }
    )
  }
  onNoClick() {
    this.dialogRef.close();
    this.router.navigateByUrl('/login')
  }
}
