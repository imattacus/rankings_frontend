/**
 * Created by mattcallaway on 29/12/2016.
 */
import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-register',
  templateUrl: 'user-register.component.html'
})

export class UserRegisterComponent {
  constructor(
    private authService: AuthService,
    private route: Router
  ){}

  username: string;
  password: string;
  passwordConf: string;

  regError: string = '';

  isError(): boolean {
    return this.regError != '';
  }

  register(): void {
    if (!(this.password == this.passwordConf)) {
      //Password and confirmation not the same
      console.log('passmatch error');
      this.regError = 'Passwords do not match!'
    } else {
      //Continue with registration
      this.authService.register(this.username, this.passwordConf).then(response => {
        if (!response) {
          //Registration unsuccessful
          this.regError = 'Username already in use!'
        } else {
          this.route.navigate(['/ranks']);
        }
      })
    }
  }
}
