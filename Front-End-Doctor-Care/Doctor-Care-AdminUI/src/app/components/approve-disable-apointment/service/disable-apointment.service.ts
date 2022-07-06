import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailPatient } from 'src/app/models/email-patient';
import { UserCancelApointment } from 'src/app/models/user-cancel-apointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisableApointmentService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getApointmentUserCancel() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<getResponse>(this.APIEndPoint + "/admin/core/appointmentusercancel", {
      headers: yourHeader,
    });
  }
  adminApproveApointmentUserCancel(id: number): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/adminaprovecancel?id=" + id, null, {
      headers: yourHeader,
    });
  }
  searchApointmentUserCancel(data: EmailPatient): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<getResponse>(this.APIEndPoint + "/admin/core/searchemailcancel", data, {
      headers: yourHeader,
    });
  }
}
interface getResponse {
  response: UserCancelApointment[];
}