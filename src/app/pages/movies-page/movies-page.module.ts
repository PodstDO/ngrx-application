import { NgModule } from '@angular/core';
import { MoviesPageComponent } from './movies-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirebaseSharedModule } from 'src/app/shared/firebase-shared.module';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { MoviesPageRoutingModule } from './movies-page-routing.module';

@NgModule({
    declarations: [
        MoviesPageComponent
    ],
    imports: [
        MoviesPageRoutingModule,
        SharedModule,
        FirebaseSharedModule,
        MaterialSharedModule
    ],
    providers: [],
    exports: []
})
export class MoviesPageModule {}
