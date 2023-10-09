import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Services/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user: LoginService) { }

  ngOnInit(): void {
    console.log(this.user.utente);
  }

}
