import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateApplicationPage } from 'src/app/core/guards/isAuthorized.guards';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileSettingsComponent } from './profile-setting/profile-settings.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileDetailsComponent,
    // canActivate: [CanActivateApplicationPage]
  },
  {
    path: 'settings',
    component: ProfileSettingsComponent,
    // canActivate: [CanActivateApplicationPage]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CanActivateApplicationPage],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
