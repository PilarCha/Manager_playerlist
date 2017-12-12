import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule} from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageplayersComponent } from './manageplayers/manageplayers.component';
import { ManagestatusComponent } from './managestatus/managestatus.component';
import { ListComponent } from './manageplayers/list/list.component';
import { AddComponent } from './manageplayers/add/add.component';
import { GameComponent } from './managestatus/game/game.component';
import { ApiService} from './api.service'

@NgModule({
  declarations: [
    AppComponent,
    ManageplayersComponent,
    ManagestatusComponent,
    ListComponent,
    AddComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
