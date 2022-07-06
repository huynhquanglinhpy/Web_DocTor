import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NamePatient } from 'src/app/models/name-patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListPatientsService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getBenhNhanTungKhamBenh() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenDoctorLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/doctor/core/benhnhantungkhambenh", {
      headers: yourHeader,
    });
  }
  getBenhNhanTungKhamBenhByName(name: NamePatient) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenDoctorLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/doctor/core/benhtungkhambenhtheotenoremail", name, {
      headers: yourHeader,
    });
  }
}
