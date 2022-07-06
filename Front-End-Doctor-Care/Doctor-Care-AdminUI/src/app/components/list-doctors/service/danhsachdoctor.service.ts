import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorInList } from 'src/app/models/doctor-in-list';
import { FindNameDoctor } from 'src/app/models/find-name-doctor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DanhsachdoctorService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDanhSachDoctor() {
    return this.httpClient.get<getResponseDoctor>(this.APIEndPoint + "/doctor/danhsachbacsi");
  }
  getDanhSachDoctorByName(data: FindNameDoctor) {
    return this.httpClient.post<getResponseDoctor>(this.APIEndPoint + "/doctor/getbacsibyname", data);
  }
  deleteDoctor(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/deletedoctor?id=" + id, null, {
      headers: yourHeader,
    });
  }
}
interface getResponseDoctor {
  doctor: DoctorInList[];
}