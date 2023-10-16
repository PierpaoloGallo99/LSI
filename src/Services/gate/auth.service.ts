import {Injectable} from '@angular/core';
import {UserPack} from "../../app/model/userPack";
import {Subject} from "rxjs";
import {Staff} from "../../app/file ts/staff";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  public isAuthencticatedSubject = new Subject<any>();
  utente: any;

  public setAuthentication(pack: UserPack): void {
    if (pack) {
      this.isAuthencticatedSubject.next(pack);
      this.isAuthenticated = true;
      localStorage.setItem('pack', JSON.stringify(pack));
      localStorage.setItem('isAuthenticated', this.isAuthenticated.toString());
    }
  }

  public setAuthenticationBool(value: boolean) {
    this.isAuthenticated = value;
    localStorage.clear();
  }

  getAuthentication() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      return isAuthenticated === 'true';
    } else {
      return false;
    }
  }
}
