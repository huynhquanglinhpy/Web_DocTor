import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { LoginSuccess } from 'src/app/models/login-success';
import { PatientLogin } from 'src/app/models/patient-login';
import { ModalForgotPasswordComponent } from '../modal-forgot-password/modal-forgot-password.component';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
  implements OnInit {

  authForm!: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;
  constructor(private formBuilder: FormBuilder, private ser: LoginService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  data: PatientLogin = new PatientLogin();
  onKeyEmail(event: any) {
    this.data.email = event.target.value
  }
  onKeyPassword(event: any) {
    this.data.password = event.target.value
  }
  doLogin() {
    this.ser.doLoginAdmin(this.data).subscribe({
      next: (res) => {
        this.loginSuccess(res);
      },
      error: (err) => {
        alert('Sai Email or Mật Khẩu');
      },
    })
  }
  userSuccessDTO!: LoginSuccess;
  local: Storage = localStorage;
  loginSuccess(res: any) {
    this.userSuccessDTO = new LoginSuccess();
    this.userSuccessDTO.email = res.email;
    this.userSuccessDTO.token = res.token;
    this.userSuccessDTO.image_url = res.emimage_url
    this.local.setItem('emailPatientLogin', this.userSuccessDTO.email);
    this.local.setItem('tokenPatientLogin', this.userSuccessDTO.token);
    this.local.setItem('patientImageUrl', this.userSuccessDTO.image_url);
    window.location.href = '/';
  }
  forgotPassword() {
    const dialogRef = this.dialog.open(ModalForgotPasswordComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
