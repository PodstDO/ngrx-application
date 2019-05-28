import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    exports: [
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class SharedModule {}
