import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players:any[];
  constructor(private _apiService:ApiService) {
  }
  allPlayers(){
    this._apiService.getPlayers()
    .then((data)=>{
      console.log('got players from list')
      this.players=data
      console.log(this.players)
    })
    .catch((error)=>{
      console.log('couldnt get players from list')
    })
  }

  ngOnInit() {
    this.allPlayers()
  }



  deletePlayer(pId){
    this._apiService.deletePlayer(pId)
    .then((data)=>{
      this.allPlayers()
    })
    .catch((error)=>{
      console.log('couldnt delete player from list')
    })
  }
}
