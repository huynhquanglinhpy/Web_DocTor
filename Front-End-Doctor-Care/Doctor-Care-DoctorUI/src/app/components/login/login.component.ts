import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DoctorLogin } from 'src/app/models/doctor-login';
import { LoginSuccess } from 'src/app/models/login-success';
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
  constructor(private formBuilder: FormBuilder, private ser: LoginService) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  adminSet() {
    if (this.authForm != undefined) {

    }
  }
  data: DoctorLogin = new DoctorLogin();
  onKeyEmail(event: any) {
    this.data.email = event.target.value
  }
  onKeyPassword(event: any) {
    this.data.password = event.target.value
  }
  doLogin() {
    this.ser.doLoginDoctor(this.data).subscribe({
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
    this.local.setItem('emailDoctorLogin', this.userSuccessDTO.email);
    this.local.setItem('tokenDoctorLogin', this.userSuccessDTO.token);
    this.local.setItem('doctorImageUrl', this.userSuccessDTO.image_url);
    window.location.href = '/';
  }
}
