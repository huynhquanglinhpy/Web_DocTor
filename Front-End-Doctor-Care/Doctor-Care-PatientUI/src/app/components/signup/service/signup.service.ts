import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPatient } from 'src/app/models/register-patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  registerPatient(data: RegisterPatient) {
    return this.httpClient.post<any>(this.APIEndPoint + "/patient/selfregister", data);
  }
}
