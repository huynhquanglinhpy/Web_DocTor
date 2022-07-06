import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddMedicine } from 'src/app/models/add-medicine';
import { InfoMedicine } from 'src/app/models/info-medicine';
import { NameMedicine } from 'src/app/models/name-medicine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImportMedicineService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getMedicineByName(data: NameMedicine): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });

    console.log(data);
    return this.httpClient.post<getResponse>(this.APIEndPoint + "/admin/core/getinfomedicinebyname", data, {
      headers: yourHeader,
    });
  }
  doNhapKhoThuoc(data: AddMedicine[]): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });

    console.log(data);
    return this.httpClient.post<getResponse>(this.APIEndPoint + "/admin/core/addnhapkhothuoc", data, {
      headers: yourHeader,
    });
  }
}
interface getResponse {
  response: InfoMedicine[];
}
