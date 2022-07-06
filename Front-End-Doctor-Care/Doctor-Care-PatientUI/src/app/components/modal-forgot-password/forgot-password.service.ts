import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForgotPassword } from 'src/app/models/forgot-password';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  changePass(data: ForgotPassword) {
    return this.httpClient.post<any>(this.APIEndPoint + "/patient/maillaylaimatkhau", data);
  }
}
