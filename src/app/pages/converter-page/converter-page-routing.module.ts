import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConverterPageComponent } from './converter-page.component';
import { CanActivateApplicationPage } from 'src/app/core/guards/isAuthorized.guards';

const routes: Routes = [
  {
    path: '',
    component: ConverterPageComponent,
    // canActivate: [CanActivateApplicationPage]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CanActivateApplicationPage],
  exports: [RouterModule]
})
export class ConverterPageRoutingModule { }
