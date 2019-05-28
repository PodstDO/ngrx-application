import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumPageComponent } from './album-page.component';
import { CanActivateApplicationPage } from 'src/app/core/guards/isAuthorized.guards';

const routes: Routes = [
  {
    path: '',
    component: AlbumPageComponent,
    // canActivate: [CanActivateApplicationPage]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CanActivateApplicationPage],
  exports: [RouterModule]
})
export class AlbumPageRoutingModule { }
