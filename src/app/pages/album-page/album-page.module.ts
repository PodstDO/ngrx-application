import { NgModule } from '@angular/core';
import { AlbumPageComponent } from './album-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirebaseSharedModule } from 'src/app/shared/firebase-shared.module';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { AlbumPageRoutingModule } from './album-page-routing.module';

@NgModule({
    declarations: [
        AlbumPageComponent
    ],
    imports: [
        AlbumPageRoutingModule,
        SharedModule,
        FirebaseSharedModule,
        MaterialSharedModule
    ],
    providers: [],
    exports: []
})
export class AlbumPageModule {}
