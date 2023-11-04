import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema Informativo Gioielleria';

  constructor(private router: Router, private authService: AuthService) {
    if( this.authService.getAuthentication()===""){
      this.router.navigate(["/login"])
    }

  }

}
