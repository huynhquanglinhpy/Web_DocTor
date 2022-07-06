import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatDialogModule
} from '@angular/material/dialog';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatFormFieldModule
} from '@angular/material/form-field';

import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  MatMenuModule
} from '@angular/material/menu';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import {
  MatTableModule
} from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HompageComponent } from './components/hompage/hompage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyJwt } from './auth/verify-jwt.service';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire/compat";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/compat/storage";
import { HttpClientModule } from '@angular/common/http';
import { ListAppointmentTodayDoctorComponent } from './component/list-appointment-today-doctor/list-appointment-today-doctor.component';
import { KhamBenhComponent } from './components/kham-benh/kham-benh.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { HoSoBenhAnComponent } from './components/ho-so-benh-an/ho-so-benh-an.component';
import { ModalDetailAppointmentComponent } from './components/modal-detail-appointment/modal-detail-appointment.component';
import { DoanhThuComponent } from './components/doanh-thu/doanh-thu.component';
import { ModalNghiPhepComponent } from './components/modal-nghi-phep/modal-nghi-phep.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: HompageComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'list-apointment', component: ListAppointmentTodayDoctorComponent },
      { path: 'kham-benh/:lichhenid', component: KhamBenhComponent },
      { path: 'list-patients', component: ListPatientsComponent },
      { path: 'hoso/:id', component: HoSoBenhAnComponent },
    ]
    , canActivate: [VerifyJwt],

  },
  { path: '#', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, DashboardComponent, HompageComponent, HeaderComponent, SlideBarComponent, ListAppointmentTodayDoctorComponent, KhamBenhComponent, ListPatientsComponent, HoSoBenhAnComponent, ModalDetailAppointmentComponent, DoanhThuComponent, ModalNghiPhepComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule, FormsModule,
    ReactiveFormsModule, MatMenuModule,
    NgbModule, PerfectScrollbarModule, MatDatepickerModule, MatOptionModule, MatNativeDateModule, BrowserAnimationsModule, MatSelectModule, MatPaginatorModule, MatTableModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCygO7o54HwNq4eobN4848Xnaw_nuQgwck",
      authDomain: "newsproject-fa5bb.firebaseapp.com",
      projectId: "newsproject-fa5bb",
      storageBucket: "newsproject-fa5bb.appspot.com",
      messagingSenderId: "1053553302212",
      appId: "1:1053553302212:web:5ca79d1dd45c389ca28791",
      measurementId: "G-6Q30DEJELJ"
    }),
    HttpClientModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatFormFieldModule, MatInputModule]
})
export class AppModule { }
