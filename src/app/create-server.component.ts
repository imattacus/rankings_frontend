import { Component, OnInit } from '@angular/core';

import { Server } from './utilities/Server';
import { ServerService } from './server.service';
import { Router } from '@angular/router'

@Component({
	selector: 'app-create-server',
	templateUrl: 'create-server.component.html'
})
export class CreateServerComponent implements OnInit {

	server = {
    name: '',
    address: '',
    port: undefined,
    image: '',
    description: '',
    votifier_enabled: false,
    votifier_address: '',
    votifier_pubkey: '',
    votifier_port: undefined,
    hidden: false
  }

  failed: boolean = false;

	constructor(
		private serverService: ServerService,
    private route: Router
	){};

	ngOnInit(): void {
    this.server.port = 25565;
    this.server.votifier_port = 8192;
	}

	create(): void {
    var server = this.server
    if (
      server.name && server.address && server.port && server.image && server.description
    ){
      this.serverService.createServer(server).then(success => {
        if (success) {
          this.route.navigate(['/myservers'])
        } else {
          // Creating server was not successful
          console.log('Server creation failed')
          this.failed = true;
        }
      })
    }

  }

}
