import { NgModule } from '@angular/core';
import { ConverterPageComponent } from './converter-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirebaseSharedModule } from 'src/app/shared/firebase-shared.module';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { ConverterPageRoutingModule } from './converter-page-routing.module';

@NgModule({
    declarations: [
        ConverterPageComponent
    ],
    imports: [
        ConverterPageRoutingModule,
        SharedModule,
        FirebaseSharedModule,
        MaterialSharedModule
    ],
    providers: [],
    exports: []
})
export class ConverterPageModule {}
