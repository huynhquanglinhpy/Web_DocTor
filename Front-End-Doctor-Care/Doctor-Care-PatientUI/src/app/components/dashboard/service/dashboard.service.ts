import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailPatient } from 'src/app/models/detail-patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  checkTokenPatient(): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/patient/core/checktoken", {
      headers: yourHeader,
    });
  }
  checkDetailPatient(): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.get<GetResponse>(this.APIEndPoint + "/patient/core/getnamepatient", {
      headers: yourHeader,
    });
  }
}
interface GetResponse {
  response: DetailPatient[];
}
