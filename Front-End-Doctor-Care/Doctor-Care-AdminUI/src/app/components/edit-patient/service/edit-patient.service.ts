import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditPatient } from 'src/app/models/edit-patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditPatientService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getPatientEditById(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/getbenhnhanedit?id=" + id, {
      headers: yourHeader
    }).pipe();
  }
  doUpdatePatient(data: EditPatient): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    console.log(data);
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/updatebenhnhanedit", data, {
      headers: yourHeader,
    });
  }
}
