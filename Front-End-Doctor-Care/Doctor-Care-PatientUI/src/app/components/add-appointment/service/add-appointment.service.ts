import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Danhsachdoctor3freeday } from 'src/app/models/danhsachdoctor3freeday';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddAppointmentService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDanhBacSi3day() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/patient/core/danhsachbacsifree3day", {
      headers: yourHeader,
    });
  }
}
interface GetResponse {
  response: Danhsachdoctor3freeday[];
}
