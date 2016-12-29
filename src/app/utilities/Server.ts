/**
 * Created by mattcallaway on 09/11/2016.
 */
import { Serializable } from './Serializable';

export class Server {
  _id: string;
  name: string;
  address: string;
  port: number;
  image: string;
  description: string;
  owner: string;
  online: boolean;
  currPlayers: number;
  maxPlayers: number;
  lastPing: Date;
  lastOnline: Date;
  votes: number;
  votifier: boolean;
  rank: number;

  deserialize(input) {
  	this._id = input._id;
  	this.name = input.name;
  	this.address = input.address;
  	this.port = input.port;
  	this.image = input.image;
  	this.description = input.description;
  	this.owner = input.owner;
  	this.online = input.status.online;
  	this.currPlayers = input.status.currPlayers;
  	this.maxPlayers = input.status.maxPlayers;
  	this.lastPing = new Date(input.status.lastPing);
  	this.lastOnline = new Date(input.status.lastOnline);
  	this.votes = input.votes;
  	this.votifier = input.votifier.enabled;
    return this;
  }
}
