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

  getRole(){
    return Number(this.utente?.code);
  }

}
