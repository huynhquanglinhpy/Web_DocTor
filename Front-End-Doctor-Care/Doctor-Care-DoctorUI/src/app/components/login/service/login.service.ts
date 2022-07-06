import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorLogin } from 'src/app/models/doctor-login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  doLoginDoctor(data: DoctorLogin) {
    return this.httpClient.post<any>(this.APIEndPoint + "/doctor/login", data);
  }
}
