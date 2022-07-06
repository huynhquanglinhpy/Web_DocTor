import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoMedicine } from 'src/app/models/info-medicine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListMedicinesService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getMedicineByName(): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });

    return this.httpClient.get<getResponse>(this.APIEndPoint + "/admin/core/getallmedicine", {
      headers: yourHeader,
    });
  }
}
interface getResponse {
  response: InfoMedicine[];
}