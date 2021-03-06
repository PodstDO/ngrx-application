import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileSettingsComponent } from './profile-setting/profile-settings.component';
import { ProfilePageComponent } from './profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    children: [
      {
        path: '',
        component: ProfileDetailsComponent
      },
      {
        path: 'settings',
        component: ProfileSettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
