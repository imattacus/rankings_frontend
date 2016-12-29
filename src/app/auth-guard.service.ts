/**
 * Created by mattcallaway on 17/11/2016.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate() {
    if(this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
