import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckJwtService {
  localStore: Storage = localStorage;
  tokenAdminLogin: Subject<string> = new BehaviorSubject<any>(1);
  constructor() { }
  checkLogin() {
    if (
      localStorage.getItem('emailDoctorLogin') != null
    ) {
      const token = this.localStore.getItem('tokenDoctorLogin')!;
      this.tokenAdminLogin.next(token);
      return true;
    } else return false;
  }
}
