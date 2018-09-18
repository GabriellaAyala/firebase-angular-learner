import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if(this.authService.user) {
      console.log(this.authService.user, "Is authenticated");
      return true;
    } else {
      console.log(this.authService.user,"Is not authenticated")
      this.router.navigate(["/"]);
    }
  }
}
