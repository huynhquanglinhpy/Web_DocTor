import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodayApointment } from 'src/app/models/today-apointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListApointmentService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getTodayAppointments() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<GetResponseTodayAppointment>(this.APIEndPoint + "/admin/core/appointmentfromtoday", {
      headers: yourHeader,
    });
  }
}
interface GetResponseTodayAppointment {
  todayappointment: TodayApointment[];
}