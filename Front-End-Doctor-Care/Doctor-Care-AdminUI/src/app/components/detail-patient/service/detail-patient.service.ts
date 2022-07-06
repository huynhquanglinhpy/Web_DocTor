import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllAboutPatient } from 'src/app/models/all-about-patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailPatientService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getAllAboutPatient(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/getallaboutpatient?id=" + id, {
      headers: yourHeader,
    }).pipe();
  }
}
interface getResponse {
  response: AllAboutPatient;
}
