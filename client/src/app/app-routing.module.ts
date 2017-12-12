import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageplayersComponent } from './manageplayers/manageplayers.component';
import { ManagestatusComponent } from './managestatus/managestatus.component';
import { ListComponent } from './manageplayers/list/list.component';
import { AddComponent } from './manageplayers/add/add.component';
import { GameComponent } from './managestatus/game/game.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component:ManageplayersComponent
  },
  {
    path: 'manage',
    children: [
      {path:'list', component:ListComponent},
      {path:'add',component:AddComponent}
    ],
    component:ManageplayersComponent
  },
  {
    path: 'status',
    children: [
      {path:':number',component:GameComponent}
    ],
    component:ManagestatusComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
