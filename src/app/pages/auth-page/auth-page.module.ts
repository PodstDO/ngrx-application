import { NgModule } from '@angular/core';
import { AuthPageComponent } from './auth-page.component';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { AuthorizationModalComponent } from './authorization-modal/authorization-modal.component';
import { SignInComponent } from './authorization-modal/sign-in/sign-in.component';
import { SignUpComponent } from './authorization-modal/sign-up/sign-up.component';
import { FirebaseService } from 'src/app/core/services/firebase.services';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirebaseSharedModule } from 'src/app/shared/firebase-shared.module';

@NgModule({
    declarations: [
        AuthPageComponent,
        AuthorizationModalComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        AuthPageRoutingModule,
        SharedModule,
        MaterialSharedModule,
        FirebaseSharedModule
    ],
    providers: [],
    exports: []
})
export class AuthPageModule {}
