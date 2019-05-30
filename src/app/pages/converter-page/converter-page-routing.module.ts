import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConverterPageComponent } from './converter-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConverterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverterPageRoutingModule { }
