/**
 * Created by mattcallaway on 17/11/2016.
 */
import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-login',
  templateUrl: 'user-login.component.html'
})

export class UserLoginComponent {
  constructor(
    private authService: AuthService,
    private route: Router
  ){}

  username: string;
  password: string;

  login(): void {
    this.authService.logIn(this.username, this.password).then(
      success => {
        if (success) {
          this.route.navigate(['/ranks'])
        }
      }
    )
  }
}

