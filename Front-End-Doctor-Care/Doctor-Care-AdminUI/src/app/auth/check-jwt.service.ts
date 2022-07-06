import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CheckTokenService } from './check-token.service';

@Injectable({
  providedIn: 'root'
})
export class CheckJwtService {
  localStore: Storage = localStorage;
  tokenAdminLogin: Subject<string> = new BehaviorSubject<any>(1);
  constructor() { }
  checkLogin() {
    if (
      localStorage.getItem('emailAdminLogin') != null
    ) {
      const token = this.localStore.getItem('tokenAdminLogin')!;
      this.tokenAdminLogin.next(token);

      return true;
    } else return false;
  }
}
