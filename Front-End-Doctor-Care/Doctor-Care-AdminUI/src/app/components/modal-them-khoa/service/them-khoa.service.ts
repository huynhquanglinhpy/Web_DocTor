import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemKhoa } from 'src/app/models/them-khoa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemKhoaService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  doAddKhoa(data: ThemKhoa): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });

    console.log(data);
    return this.httpClient.post<any>(this.APIEndPoint + "/khoa/themmoi", data, {
      headers: yourHeader,
    });
  }
}
