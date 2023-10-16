import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/gate/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router:Router, public authS:AuthService) { }

  ngOnInit(): void {
    this.authS.isAuthencticatedSubject.subscribe((isAuth: boolean)=>{
    })
  }

  onHome() {
    this.router.navigate(["/home"]);
  }

  // onMagazzino() {
  //   this.router.navigate(["/warehouse"]);
  // }
  //
  // onOrdiniSpediti() {
  //   this.router.navigate(["/home"]);
  // }
  //
  // onPersonale() {
  //   this.router.navigate(["/staff"]);
  // }
  //
  // onOrdini() {
  //   this.router.navigate(["/orders"]);
  // }
  //
  // onFornitori() {
  //   this.router.navigate(["/supplier"]);
  // }
  //
  // onProdotti() {
  //   this.router.navigate(["/staff"]);
  // }

  onLogin() {
    this.router.navigate(["/login"]);
  }

  onLogOut() {
    this.authS.setAuthenticationBool(false);
    localStorage.clear();
    this.router.navigate(["/"]);
  }
}
