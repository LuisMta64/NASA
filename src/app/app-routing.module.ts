import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyImageComponent } from './home/daily-image/daily-image.component';
import { GaleriaComponent } from './home/galeria/galeria.component';
import { ComponentImageComponent } from './home/galeria/component-image/component-image.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'daily', pathMatch: 'full' 
  },
  {
    path: 'daily',
    component: DailyImageComponent
  },
  {
    path: 'galery/:planet',
    component: GaleriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
