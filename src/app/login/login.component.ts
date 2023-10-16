import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../Services/gate/login.service";
import {AuthService} from "../../Services/gate/auth.service";
import {CanActivate, Router} from "@angular/router";
import {UserPack} from "../model/userPack";
import {ROUTING_PATH_COSTANTS} from "../../Services/costants/app.path-constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, CanActivate {
  password = ''
  show = false;
  utente: any;


  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.getAuthentication())
      this.router.navigate([ROUTING_PATH_COSTANTS.HOME]);
  }

  showPassword() {
    this.show = !this.show;
  }

  getValueForm(formData: any) {
    const list: string[] = [];
    if (formData.email == '' || formData.password == '' || formData == null) {
      console.error("ERRORE_SPAZI_VUOTI");
    } else {
      list[0] = formData.email;
      list[1] = formData.password;
      this.utente = this.loginService.login(list).subscribe((response) => {
          this.authService.utente = response;

          let userPack = new UserPack(formData.email, formData.password, this.authService.utente.role)
          this.authService.setAuthentication(userPack);

          this.router.navigate([ROUTING_PATH_COSTANTS.HOME]);
        },
        (error) => {
          console.log(error);
        });
    }
  }

  //let userPack = new UserPack(formData.email, formData.password);
  //this.authService.setAuth(userPack);

  canActivate(): boolean {
    if (this.authService.getAuthentication()) return true;
    return false;
  }

}
