import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MaterialSharedModule } from './shared/material-shared.module';
import { SharedModule } from './shared/shared.module';
import { FirebaseSharedModule } from './shared/firebase-shared.module';
import { FirebaseService } from './core/services/firebase.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    HomePageModule,
    MaterialSharedModule,
    FirebaseSharedModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
