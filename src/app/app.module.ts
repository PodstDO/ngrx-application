import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { AuthPageModule } from './pages/auth-page/auth-page.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MaterialSharedModule } from './shared/material-shared.module';
import { SharedModule } from './shared/shared.module';
import { FirebaseSharedModule } from './shared/firebase-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderUserComponent } from './pages/header/header-user/header-user.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUserComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AuthPageModule,
    MaterialSharedModule,
    FirebaseSharedModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
