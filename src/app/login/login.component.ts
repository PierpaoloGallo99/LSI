import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Services/login.service";
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password=''
  show=false;

  utente: any;

  myForm = {
    email:'',
    password:''
}

  constructor(private router:Router, private loginService: LoginService, private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.getAuthentication())
      this.router.navigate(["/home"]);
  }

  showPassword(){
    this.show=!this.show;
  }

  getValueForm(formData: any) {
    const list: string[] = [];
    if(formData.email == '' || formData.password == '' || formData == null){
      console.error("ERRORE_SPAZI_VUOTI");
    }
    else{
      list[0]=formData.email;
      list[1]=formData.password;
      this.utente= this.loginService.login(list).subscribe();
      this.authService.setAuth();
      this.router.navigate(["/home"]);
    }
  }

}
