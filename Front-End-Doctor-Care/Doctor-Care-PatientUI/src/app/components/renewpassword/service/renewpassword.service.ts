import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdatePassword } from 'src/app/models/update-password';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RenewpasswordService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  renewPass(data: UpdatePassword, token: string) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/patient/renewpassword?token=" + token, data);
  }
}
