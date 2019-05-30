import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirebaseSharedModule } from 'src/app/shared/firebase-shared.module';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileSettingsComponent } from './profile-setting/profile-settings.component';
import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';

@NgModule({
    declarations: [
        ProfilePageComponent,
        ProfileDetailsComponent,
        ProfileSettingsComponent
    ],
    imports: [
        ProfilePageRoutingModule,
        SharedModule,
        FirebaseSharedModule,
        MaterialSharedModule
    ],
    providers: [],
    exports: []
})
export class ProfilePageModule {}
