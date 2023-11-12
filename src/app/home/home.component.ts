import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Services/login.service";
import { AuthService } from 'src/Services/auth.service';
import { Staff } from '../file ts/staff';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedUser: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.loggedUser=this.auth.getAuthentication();
    console.log(this.auth.utente)
  }

}
