import { Component, OnInit} from '@angular/core';
import {ApiService} from './../../api.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
newPlayer:object
  constructor(private _apiService:ApiService, private _router: Router) {
    this.newPlayer={
      name:'',
      position:''
    }
   }

  ngOnInit() {
  }
  whenSubmit(){
    this._apiService.addPerson(this.newPlayer)
    .then((data)=>{
      console.log('data',data)
      this._router.navigate(['manage','list'])
    })
    .catch((errors)=>{
      console.log('Errors submitting mofo')
    })


  }

}
