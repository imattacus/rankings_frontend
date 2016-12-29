/**
 * Created by mattcallaway on 09/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Server } from './utilities/Server';
import { ServerService } from './server.service';

@Component({
  selector: 'app-user-servers',
  templateUrl: './user-servers.component.html',
  styles: [`
    a {
      cursor: pointer;
    }
  `]
})
export class UserServersComponent implements OnInit {

  servers: Server[];
  username: string;

  delError: string = '';

  constructor(
    private serverService: ServerService,
    private route: Router
  ){}

  getServers(): void {
    this.serverService.getUsersServers(localStorage.getItem('userid')).then(servers => {this.servers = servers});
  }

  ngOnInit(): void {
    this.getServers();
    this.username = localStorage.getItem('username');
  }

  deleteServer(server: Server): void {
    this.serverService.deleteServer(server._id).then(response => {
      if (response.success) {
        // Successfully deleted
        // Update server list directly from server only few servers
        this.delError = ''
        this.getServers();
      } else {
        this.delError = response.message;
      }
    })
  }

  goToDetail(server: Server): void {
    this.route.navigate(['/detail', server._id]);
  }
}
