import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddPatient } from 'src/app/models/add-patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  doAddPatient(data: AddPatient): Observable<any> {
    console.log(data);
    return this.httpClient.post<any>(this.APIEndPoint + "/patient/register", data);
  }
}
