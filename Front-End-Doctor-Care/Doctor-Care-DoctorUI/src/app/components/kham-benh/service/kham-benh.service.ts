import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KhamBenhDoctor } from 'src/app/models/kham-benh-doctor';
import { TenThuoc } from 'src/app/models/ten-thuoc';
import { Thuoc } from 'src/app/models/thuoc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KhamBenhService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  doKhamBenh(data: KhamBenhDoctor, idlichhenkham: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenDoctorLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/doctor/core/khambenh?lichhenid=" + idlichhenkham, data, {
      headers: yourHeader,
    });
  }
  getMedicine(): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenDoctorLogin')}`
    });

    return this.httpClient.get<getResponse>(this.APIEndPoint + "/doctor/core/getallthuoc", {
      headers: yourHeader,
    });
  }
  getMedicineByName(data: TenThuoc): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenDoctorLogin')}`
    });

    return this.httpClient.post<getResponse>(this.APIEndPoint + "/doctor/core/getdetailthuocbyname", data, {
      headers: yourHeader,
    });
  }
}
interface getResponse {
  response: Thuoc[];
}
