import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { Staff } from 'src/app/file ts/staff';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated;

  constructor() {
    this.isAuthenticated=false;
  }

  public utente : Staff | undefined;

  private idUser: number | undefined;

  setAuthentication(){
    this.isAuthenticated= !this.isAuthenticated;
    localStorage.setItem("user", JSON.stringify(this.utente));
  }

  getAuthentication(){
    const isAuthenticated = localStorage.getItem('user');
    if (isAuthenticated) {
      const user: Staff=JSON.parse(isAuthenticated);
      this.utente=user;
      return user;
    } else {
      return "";
    }
  }

  getRole(){
    return this.utente?.role;
  }

}
