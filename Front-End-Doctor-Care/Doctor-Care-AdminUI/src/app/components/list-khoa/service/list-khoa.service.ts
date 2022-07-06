import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InforKhoa } from 'src/app/models/infor-khoa';
import { TenKhoa } from 'src/app/models/ten-khoa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListKhoaService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDanhSachKhoa() {
    return this.httpClient.get<getResponse>(this.APIEndPoint + "/khoa/danhsachkhoa");
  }
  getDanhSachKhoaTheoTen(name: TenKhoa) {
    return this.httpClient.post<getResponse>(this.APIEndPoint + "/khoa/timtenkhoa", name);
  }
}
interface getResponse {
  response: InforKhoa[];
}