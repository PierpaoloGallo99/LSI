import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  private isAuthenticated : boolean=false;

  setAuth(){
    this.isAuthenticated= !this.isAuthenticated;
    localStorage.setItem('isAuthenticated', this.isAuthenticated.toString());
  }

  getAuthentication(){
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      return isAuthenticated === 'true';
    } else {
      return false;
    }
  }
}
