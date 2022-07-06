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
  MatTabsModule
} from '@angular/material/tabs';
import {
  MatTableModule
} from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { MatPseudoCheckboxModule } from '@angular/material/core';
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
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire/compat";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/compat/storage";
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DetailPatientComponent } from './components/detail-patient/detail-patient.component';
import { ListPaymentsComponent } from './components/list-payments/list-payments.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { ImportMedicineComponent } from './components/import-medicine/import-medicine.component';
import { ModalAddNewTypeMedicineComponent } from './components/modal-add-new-type-medicine/modal-add-new-type-medicine.component';
import { ListMedicinesComponent } from './components/list-medicines/list-medicines.component';
import { ModalDisalbleThuocComponent } from './components/modal-disalble-thuoc/modal-disalble-thuoc.component';
import { ModalUpdatePriceThuocComponent } from './components/modal-update-price-thuoc/modal-update-price-thuoc.component';
import { ListApointmentComponent } from './components/list-apointment/list-apointment.component';
import { ApproveDisableApointmentComponent } from './components/approve-disable-apointment/approve-disable-apointment.component';
import { ModalDetailHosobenhanComponent } from './components/modal-detail-hosobenhan/modal-detail-hosobenhan.component';
import { DetailDoctorComponent } from './components/detail-doctor/detail-doctor.component';
import { DoanhThuComponent } from './components/doanh-thu/doanh-thu.component';
import { ModalThemKhoaComponent } from './components/modal-them-khoa/modal-them-khoa.component';
import { ListKhoaComponent } from './components/list-khoa/list-khoa.component';
import { ListDoctorOnKhoaComponent } from './components/list-doctor-on-khoa/list-doctor-on-khoa.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: HompageComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'add-doctor', component: AddDoctorComponent },
      { path: 'list-doctors', component: ListDoctorsComponent },
      { path: 'list-patients', component: ListPatientsComponent },
      { path: 'list-medicines', component: ListMedicinesComponent },
      { path: 'list-payments', component: ListPaymentsComponent },
      { path: 'list-apointments', component: ListApointmentComponent },
      { path: 'block-apointments', component: ApproveDisableApointmentComponent },
      { path: 'add-patient', component: AddPatientComponent },
      { path: 'import-medicine', component: ImportMedicineComponent },
      { path: 'patient/:id', component: DetailPatientComponent },
      { path: 'doctor/:id', component: DetailDoctorComponent },
      { path: 'invoice/:id', component: InvoiceComponent },
      { path: 'editdoctor/:id', component: EditDoctorComponent },
      { path: 'editpatient/:id', component: EditPatientComponent },
      { path: 'doanhthu', component: DoanhThuComponent },
      { path: 'list-khoa', component: ListKhoaComponent },
      { path: 'khoa/:id', component: ListDoctorOnKhoaComponent },
    ]
    , canActivate: [VerifyJwt],

  },
  { path: '#', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, DashboardComponent, HompageComponent, HeaderComponent, SlideBarComponent, AddDoctorComponent, ListDoctorsComponent, ListPatientsComponent, EditPatientComponent, AddPatientComponent, DetailPatientComponent, ListPaymentsComponent, InvoiceComponent, EditDoctorComponent, ImportMedicineComponent, ModalAddNewTypeMedicineComponent, ListMedicinesComponent, ModalDisalbleThuocComponent, ModalUpdatePriceThuocComponent, ListApointmentComponent, ApproveDisableApointmentComponent, ModalDetailHosobenhanComponent, DetailDoctorComponent, DoanhThuComponent, ModalThemKhoaComponent, ListKhoaComponent, ListDoctorOnKhoaComponent,
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
    HttpClientModule, MatDialogModule, MatPseudoCheckboxModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatFormFieldModule, MatInputModule]
})
export class AppModule { }
