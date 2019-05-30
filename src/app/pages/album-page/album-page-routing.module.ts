import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumPageComponent } from './album-page.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumPageRoutingModule { }
