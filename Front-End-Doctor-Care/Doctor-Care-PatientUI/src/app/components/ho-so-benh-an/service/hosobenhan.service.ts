import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HoSoBenhAn } from 'src/app/models/ho-so-benh-an';
import { UpdatePassword } from 'src/app/models/update-password';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HosobenhanService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getHoSoBenhAn() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.get<GetResponse>(this.APIEndPoint + "/patient/core/hosobenhan", {
      headers: yourHeader,
    });
  }
}
interface GetResponse {
  response: HoSoBenhAn[];
}