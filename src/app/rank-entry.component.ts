/**
 * Created by mattcallaway on 09/11/2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Server } from './utilities/Server';

@Component({
  selector: 'tr[app-rank-entry]',
  templateUrl: './rank-entry.component.html'
})
export class RankEntryComponent implements OnInit {

  @Input()
  server: Server;

  @Input()
  rank: number;

  ngOnInit(): void {
  }
}
