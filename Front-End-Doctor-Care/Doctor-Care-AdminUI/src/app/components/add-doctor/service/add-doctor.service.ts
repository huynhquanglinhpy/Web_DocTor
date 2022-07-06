import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorInList } from 'src/app/models/doctor-in-list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddDoctorService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  doAddDoctor(data: DoctorInList): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    console.log(data);
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/thembacsi", data, {
      headers: yourHeader,
    });
  }
}
