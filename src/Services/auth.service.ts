import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated;

  constructor() {
    this.isAuthenticated=false;
  }
  private idUser: number | undefined;

  setAuthentication(){
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
