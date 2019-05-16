import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    exports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class SharedModule {}
