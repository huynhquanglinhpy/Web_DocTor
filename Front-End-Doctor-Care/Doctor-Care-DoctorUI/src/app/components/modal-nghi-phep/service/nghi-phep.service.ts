import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BacSiXinNghi } from 'src/app/models/bac-si-xin-nghi';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NghiPhepService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  bacsiXinNghi(data: BacSiXinNghi) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenDoctorLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/doctor/core/xinnghi", data, {
      headers: yourHeader,
    });
  }
}
