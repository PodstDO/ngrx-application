import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { CanActivateApplicationPage } from 'src/app/core/guards/isAuthorized.guards';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    // canActivate: [CanActivateApplicationPage]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CanActivateApplicationPage],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
