import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanLoadApplicationPage, CanLoadAuthPage } from './core/guards/isAuthorized.guards';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: './pages/auth-page/auth-page.module#AuthPageModule',
    // canLoad: [CanLoadAuthPage]
  },
  {
    path: 'home',
    loadChildren: './pages/home-page/home-page.module#HomePageModule',
    // canLoad: [CanLoadApplicationPage]
  },
  {
    path: 'movies',
    loadChildren: './pages/movies-page/movies-page.module#MoviesPageModule',
    // canLoad: [CanLoadApplicationPage]
  },
  {
    path: 'converter',
    loadChildren: './pages/converter-page/converter-page.module#ConverterPageModule',
    // canLoad: [CanLoadApplicationPage]
  },
  {
    path: 'album',
    loadChildren: './pages/album-page/album-page.module#AlbumPageModule',
    // canLoad: [CanLoadApplicationPage]
  },
  {
    path: 'admin',
    loadChildren: './pages/admin-page/admin-page.module#AdminPageModule',
    // canLoad: [CanLoadApplicationPage]
  },
  {
    path: 'profile',
    loadChildren: './pages/profile-page/profile-page.module#ProfilePageModule',
    // canLoad: [CanLoadApplicationPage]
  },
  {
    path: '**',
    component: PageNotFoundComponent
    // canLoad: [CanLoadApplicationPage]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    CanLoadApplicationPage,
    CanLoadAuthPage
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
