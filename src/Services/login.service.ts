import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Staff} from "../app/file ts/staff";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userURL = 'http://localhost:8080/users';

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public login(pack: string[]): Observable<Staff>{
    return this.http.post<Staff>(this.userURL+"/login",pack);
  }

}
