import { Injectable } from '@angular/core';
import {AuthService} from "../gate/auth.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {ROUTING_PATH_COSTANTS} from "../costants/app.path-constants";

@Injectable({
  providedIn: 'root'
})
export class CanActivateViaAuthGuardService {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.getAuthentication()){
      return true;
    }else{
      this.router.navigate([ROUTING_PATH_COSTANTS.LOGIN]);
      return false;
    }
  }
}
