/**
 * Created by mattcallaway on 10/11/2016.
 */
import {Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { Settings } from './utilities/config';

import 'rxjs/add/operator/toPromise';

import { Server } from './utilities/Server';
import { ServerService } from './server.service';

@Component({
  selector: 'app-server-detail',
  templateUrl: 'server-detail.component.html'
})
export class ServerDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private serverService: ServerService,
    private http: Http
  ){}

  @Input()
  server: Server;

  mcusername: string;

  votesuccess = 0;
  votecomplete = false;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let _id = params['id'];
      console.log(_id);
      this.serverService.getServer(_id).then(server => this.server = server);
    })
  }

  sendVote(): void {
    if (!this.votecomplete) {
      this.serverService.sendVote(this.server._id, this.mcusername)
        .then(success => {
          if (success) {
            //If voting successful
            this.votesuccess = 1;
            this.votecomplete = true;
          } else {
            this.votesuccess = 2;
          }
        });
    }
  }

}
