import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientLogin } from 'src/app/models/patient-login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  doLoginAdmin(data: PatientLogin) {
    return this.httpClient.post<any>(this.APIEndPoint + "/patient/login", data);
  }
}
