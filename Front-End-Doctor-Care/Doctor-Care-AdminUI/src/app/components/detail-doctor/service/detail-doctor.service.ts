import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorNewpass } from 'src/app/models/doctor-newpass';
import { RangeDateDoctorHosobenhan } from 'src/app/models/range-date-doctor-hosobenhan';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailDoctorService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getAllAboutDoctor(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/getallaboutdoctor?id=" + id, {
      headers: yourHeader,
    }).pipe();
  }
  getAllHoSoBenhAnBaseDoctorId(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/getallhosobenhanbasedoctor?id=" + id, {
      headers: yourHeader,
    }).pipe();
  }
  getAllHoSoBenhAnBaseDoctorIdDateRange(id: number, data: RangeDateDoctorHosobenhan) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/searchdaterange?id=" + id, data, {
      headers: yourHeader,
    }).pipe();
  }
  updateDoctorPass(id: number, data: DoctorNewpass) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/updatepassdoctor?id=" + id, data, {
      headers: yourHeader,
    }).pipe();
  }
}
