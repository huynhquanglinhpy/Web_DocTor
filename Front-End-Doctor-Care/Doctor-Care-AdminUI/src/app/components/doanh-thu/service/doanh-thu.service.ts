import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RangeDateDoctorHosobenhan } from 'src/app/models/range-date-doctor-hosobenhan';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoanhThuService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getdoanhthuthismonth() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/getdoanhthutheothanghientai", {
      headers: yourHeader,
    }).pipe();
  }
  getdoanhthuthisyear() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/getdoanhthutheonamhientai", {
      headers: yourHeader,
    }).pipe();
  }
  getdoanhthutheongayhientai() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/getdoanhthutheongayhientai", {
      headers: yourHeader,
    }).pipe();
  }
  getdoanhthutheodaterange(data: RangeDateDoctorHosobenhan) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/getdoanhthutheodaterange", data, {
      headers: yourHeader,
    }).pipe();
  }
}
