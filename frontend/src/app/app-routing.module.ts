import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MylistComponent } from './mylist/mylist.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  {path:'home',component:HomeComponent},
  {path:'mylist',component:MylistComponent},
  // {path:'watch',component:WatchComponent}
  {path:'watch/:category/:id',component:WatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
