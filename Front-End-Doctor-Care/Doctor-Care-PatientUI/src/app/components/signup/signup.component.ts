import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterPatient } from 'src/app/models/register-patient';
import { SignupService } from './service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm!: FormGroup;
  submitted = false;
  returnUrl!: string;
  hide = true;
  chide = true;
  data: RegisterPatient = new RegisterPatient();
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ser: SignupService
  ) { }
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ["", Validators.required],
      cpassword: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  get f() {
    return this.authForm.controls;
  }
  register() {
    this.ser.registerPatient(this.data).subscribe({
      next: res => {
        alert("Check mail nha")
      },
      error: err => {
        alert("Email đã đăng ký")
      }
    })
  }
  onKeyInput(event: any) {
    this.data.fullName = event.target.value
  }
  onKeyEmail(event: any) {
    this.data.email = event.target.value
  }
  onKeyPass(event: any) {
    this.data.password = event.target.value
  }
}
