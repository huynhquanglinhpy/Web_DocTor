import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bienlaichuatratien } from 'src/app/models/bienlaichuatratien';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListPaymentsService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDanhSachBienLaiChuaTraTien() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<getResponse>(this.APIEndPoint + "/admin/core/getlisthosobenhanchuatratien", {
      headers: yourHeader,
    });
  }
  getDanhSachBienLaiChuaTraTienBaseonId(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<getResponse>(this.APIEndPoint + "/admin/core/getlisthosobenhanchuatratienbaseonid?id=" + id, {
      headers: yourHeader,
    });
  }
  thanhtoanhoadon(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/benhnhanthanhtoantien?id=" + id, null, {
      headers: yourHeader,
    });
  }
}
interface getResponse {
  response: Bienlaichuatratien[];
}