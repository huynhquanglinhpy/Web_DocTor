import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PastApointment } from 'src/app/models/past-apointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PastApointmentService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getPastAppointments() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.get<GetResponse>(this.APIEndPoint + "/patient/core/gethistoryapointment", {
      headers: yourHeader,
    });
  }
}
interface GetResponse {
  response: PastApointment[];
}
