import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor( router:Router) {
    router.events.subscribe((url:any) => console.log(url));
    console.log("this is the url", router.url);  // to print only path eg:"/login"
  }

  ngOnInit() {

  }

  home() {
    
  }
}
