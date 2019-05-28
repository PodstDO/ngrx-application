import { NgModule } from '@angular/core';
import { AdminPageComponent } from './admin-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirebaseSharedModule } from 'src/app/shared/firebase-shared.module';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { AdminPageRoutingModule } from './admin-page-routing.module';

@NgModule({
    declarations: [
        AdminPageComponent
    ],
    imports: [
        AdminPageRoutingModule,
        SharedModule,
        FirebaseSharedModule,
        MaterialSharedModule
    ],
    providers: [],
    exports: []
})
export class AdminPageModule {}
