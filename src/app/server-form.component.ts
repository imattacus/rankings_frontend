/**
 * Created by mattcallaway on 11/11/2016.
 */
import { Component, OnInit, Input } from '@angular/core';
import { Server } from './utilities/Server';

@Component({
  selector: 'app-server-form',
  templateUrl: 'server-form.component.html'
})
export class ServerFormComponent {

  @Input()
  server: Server;

  @Input()
  update: boolean;

  submit(): void {
    if(this.update) {

    }
  }

}

