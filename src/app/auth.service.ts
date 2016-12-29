/**
 * Created by mattcallaway on 17/11/2016.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Settings } from './utilities/config';
import { tokenNotExpired, AuthHttp } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(
    private authHttp: AuthHttp,
    private http: Http
  ){}

  loggedIn(): boolean {
    return tokenNotExpired();
  }

  logIn(username: string, password: string): Promise<boolean> {
    return this.http.post(Settings.backendUrl + '/users/login', {username: username, password: password})
      .toPromise()
      .then(response => {
        if (!response.json().success) {
          //Log in not successful
          return false;
        } else {
          //Log in is success, need to save token and inform of success
          localStorage.setItem('id_token', response.json().token);
          localStorage.setItem('userid', response.json().user._id);
          localStorage.setItem('username', response.json().user.username);
          return true;
        }
      })
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
  }

  register(username: string, password: string): Promise<boolean> {
    return this.http.post(Settings.backendUrl + '/users/register', {username: username, password: password})
      .toPromise()
      .then(response => {
        if (!response.json().success) {
          //Registration not successful because username already exists
          return false;
        } else {
          //Registration was a success
          localStorage.setItem('id_token', response.json().token);
          localStorage.setItem('userid', response.json().user._id);
          localStorage.setItem('username', response.json().user.username);
          return true;
        }
      })
  }

}
