import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorInList } from 'src/app/models/doctor-in-list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditDoctorService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDoctorEditById(id: number) {
    return this.httpClient.get<any>(this.APIEndPoint + "/doctor/getbacsiedit?id=" + id).pipe();
  }
  doUpdateDoctor(data: DoctorInList): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    console.log(data);
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/updatebacsi", data, {
      headers: yourHeader,
    });
  }
}
