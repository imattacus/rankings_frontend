/**
 * Created by mattcallaway on 09/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Server } from './utilities/Server';
import { ServerService } from './server.service';

@Component({
  selector: 'app-rank-table',
  templateUrl: './rank-table.component.html'
})
export class RankTableComponent implements OnInit {

  servers: Server[];

  constructor(
    private serverService: ServerService,
    private route: Router
  ){}

  getServers(): void {
    this.serverService.getServers().then(servers => {this.servers = servers});
  }

  ngOnInit(): void {
    this.getServers();
  }

  goToDetail(server: Server): void {
    this.route.navigate(['/detail', server._id]);
  }
}
