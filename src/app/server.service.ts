/**
 * Created by mattcallaway on 09/11/2016.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Settings } from './utilities/config';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { Server } from './utilities/Server';


@Injectable()
export class ServerService {

  baseUrl = "http://localhost:3000";

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ){};

  getServers(): Promise<Server[]> {
    var serversacc: Server[] = [];
    return this.http.get(this.baseUrl + '/api/servers')
      .toPromise()
      .then(response => {
        var servers = response.json();
        for (var i=0; i<servers.length; i++){
          serversacc.push(new Server().deserialize(servers[i]));
        }
        return serversacc;
      })
  }

  getUsersServers(userid: string) {
    var serversacc: Server[] = [];
    return this.http.get(this.baseUrl + '/api/servers/' + userid)
      .toPromise()
      .then(response => {
        var servers = response.json();
        for (var i=0; i<servers.length; i++){
          serversacc.push(new Server().deserialize(servers[i]));
        }
        return serversacc;
      })
  }

  getServer(id: string): Promise<Server> {
    return this.http.get(this.baseUrl + '/api/server/' + id)
      .toPromise()
      .then(response => new Server().deserialize(response.json()))
      .catch(this.handleError);
  }

  deleteServer(id: string): Promise<any> {
    return this.authHttp.delete(this.baseUrl + '/api/server/' + id)
      .toPromise()
      .then(response => {return response})
      .catch(this.handleError)
  }

  createServer(server: Object): Promise<boolean> {
    return this.authHttp.post(this.baseUrl + '/api/servers', server)
      .toPromise()
      .then(response => {
        if (response.json().success) {
          return true;
        } else {
          console.log(response.json().message);
          return false;
        }
      })
  }

  sendVote(id: string, mcusername: string): Promise<boolean> {
    return this.http.post(Settings.backendUrl + '/api/vote/' + id, {"mcusername": mcusername})
      .toPromise()
      .then(response => response.json().success)
      .catch(error => false);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
