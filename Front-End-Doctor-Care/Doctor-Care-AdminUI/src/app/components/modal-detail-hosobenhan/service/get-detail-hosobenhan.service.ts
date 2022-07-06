import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDetailHosobenhanService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getHoSoBenhAnId(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });

    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/getinforabouthosobenhan?id=" + id, {
      headers: yourHeader,
    }).pipe();
  }
}
