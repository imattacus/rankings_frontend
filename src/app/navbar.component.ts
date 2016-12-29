/**
 * Created by mattcallaway on 09/11/2016.
 */
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(
    private auth: AuthService
  ){};

  loggedIn(): boolean {
    return this.auth.loggedIn();
  }

  logout(): void {
    this.auth.logout();
  }
}
