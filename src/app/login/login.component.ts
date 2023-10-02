import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password=''
  show=false;

  constructor() { }

  ngOnInit(): void {
  }
  
  showPassword(){
    this.show=!this.show;
  }


}
