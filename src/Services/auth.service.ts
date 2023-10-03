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
  }

  getAuthentication(){ return this.isAuthenticated;}

}
