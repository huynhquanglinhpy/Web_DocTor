import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DisableMedicine } from 'src/app/models/disable-medicine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisableThuocService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  doDisableEnableThuoc(data: DisableMedicine): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });

    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/diablethuoc", data, {
      headers: yourHeader,
    });
  }
}
