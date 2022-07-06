import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailApointment } from 'src/app/models/detail-apointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalDetailAppointmentService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDetailApointment(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenDoctorLogin')}`
    });
    return this.httpClient.get<GetResponse>(this.APIEndPoint + "/doctor/core/detailapointment?id=" + id, {
      headers: yourHeader,
    });
  }
}
interface GetResponse {
  response: DetailApointment[];
}
