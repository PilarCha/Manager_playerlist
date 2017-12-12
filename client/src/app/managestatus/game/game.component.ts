import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../api.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  allPlayers:any[];
  gameNum:number
  constructor(private _apiService:ApiService, private _router:Router, private _route:ActivatedRoute) { }
getAllPlayers(){
  this._apiService.getPlayers()
  .then((data)=>{
    this.allPlayers=data
    console.log('all players',this.allPlayers)
  })
  .catch((errors)=>{
    console.log(errors)
  })
}
  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      console.log('game number', params.get('number'))
      this.gameNum= parseInt(params.get('number'))
      this.getAllPlayers()
    })
  }
  changeStatus(id,gameNum,status){
    this._apiService.changeStatus({_id:id,number:gameNum,status:status})
    .then((data)=>{
      console.log(data)
      this.getAllPlayers()
    })
    .catch((errors)=>{
      console.log(errors)
    })

  }

}
