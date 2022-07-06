import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor';
import { LichLamViecbacsi } from '../models/lich-lam-viecbacsi';
import { PatientDatLichKham } from '../models/patient-dat-lich-kham';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDanhSachBacsiBaseonKhoaid(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.get<GetResponseDoctor>(this.APIEndPoint + "/patient/core/doctorbaseonkhoaid?id=" + id, {
      headers: yourHeader,
    });
  }
  getLichLamViecBacSi(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.get<GetResponseLichLamViec>(this.APIEndPoint + "/patient/core/lichlamviecbacsi?bacsiid=" + id, {
      headers: yourHeader,
    });
  }
  doDatLichKham(data: PatientDatLichKham) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/patient/core/datlichkham", data, {
      headers: yourHeader,
    });
  }
}
interface GetResponseDoctor {
  doctor: Doctor[];
}
interface GetResponseLichLamViec {
  lichlamviec: LichLamViecbacsi[];
}

