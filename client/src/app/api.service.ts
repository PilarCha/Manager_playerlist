import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { AddComponent } from './manageplayers/add/add.component';
import {ListComponent} from './manageplayers/list/list.component'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ApiService {

  constructor(private _http:Http) { }
  addPerson(newPlayer){
    return this._http.post('api/players',newPlayer).map(Response=>Response.json()).toPromise()
  }
  getPlayers(){
    return this._http.get('api/players').map(Response=>Response.json()).toPromise()
  }
  deletePlayer(pId){

  return this._http.delete('api/players/'+pId).map(Response=>Response.json()).toPromise()
  }
  changeStatus(playerObj){
    return this._http.put('/api/players/'+playerObj._id,playerObj).map(Response=>Response.json()).toPromise()
  }

}
