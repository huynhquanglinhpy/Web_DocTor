import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FindNamePatient } from 'src/app/models/find-name-patient';
import { PatientInList } from 'src/app/models/patient-in-list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListPatientsService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDanhSachPatient() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<getResponsePatient>(this.APIEndPoint + "/admin/core/danhsachbenhnhan", {
      headers: yourHeader,
    });
  }
  getDanhSachPatientByName(data: FindNamePatient) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<getResponsePatient>(this.APIEndPoint + "/admin/core/danhsachbenhnhanbynameemail", data, {
      headers: yourHeader,
    });
  }
  disablePatient(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.post<getResponsePatient>(this.APIEndPoint + "/admin/core/disablebenhnhan?id=" + id, null, {
      headers: yourHeader,
    });
  }
}
interface getResponsePatient {
  patient: PatientInList[];
}