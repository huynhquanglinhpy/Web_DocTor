import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorInList } from 'src/app/models/doctor-in-list';
import { FindNameDoctor } from 'src/app/models/find-name-doctor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListDoctorOnKhoaService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDanhSachDoctor(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<getResponseDoctor>(this.APIEndPoint + "/admin/core/getdanhsachbacsitrongkhoa?id=" + id, {
      headers: yourHeader,
    });
  }
  getDanhSachDoctorByName(data: FindNameDoctor, id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<getResponseDoctor>(this.APIEndPoint + "/admin/core/getbacsibyname?id=" + id, data, {
      headers: yourHeader,
    });
  }
}
interface getResponseDoctor {
  doctor: DoctorInList[];
}