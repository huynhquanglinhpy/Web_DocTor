import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodayDoctorApointment } from 'src/app/models/today-doctor-apointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListComponentService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getTodayApointmentDoctor() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenDoctorLogin')}`
    });
    return this.httpClient.get<GetResponse>(this.APIEndPoint + "/doctor/core/gettodayapointment", {
      headers: yourHeader,
    });
  }
}
interface GetResponse {
  todayappointment: TodayDoctorApointment[];
}
