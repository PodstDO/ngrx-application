import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirebaseSharedModule } from 'src/app/shared/firebase-shared.module';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        HomePageRoutingModule,
        SharedModule,
        FirebaseSharedModule,
        MaterialSharedModule
    ],
    providers: [],
    exports: []
})
export class HomePageModule {}
