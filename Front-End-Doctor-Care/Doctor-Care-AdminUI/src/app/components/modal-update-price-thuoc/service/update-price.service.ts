import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdatePriceThuoc } from 'src/app/models/update-price-thuoc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdatePriceService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  doUpdaetPrice(data: UpdatePriceThuoc): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });

    return this.httpClient.post<any>(this.APIEndPoint + "/admin/core/updateprice", data, {
      headers: yourHeader,
    });
  }
}
