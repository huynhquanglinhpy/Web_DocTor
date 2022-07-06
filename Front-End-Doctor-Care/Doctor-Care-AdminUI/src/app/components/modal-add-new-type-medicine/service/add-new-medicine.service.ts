import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemThuoc } from 'src/app/models/them-thuoc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddNewMedicineService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  doAddNewThuoc(data: ThemThuoc): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });

    console.log(data);
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/themthuoc", data, {
      headers: yourHeader,
    });
  }
}
