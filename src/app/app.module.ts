import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GaleriaComponent } from './home/galeria/galeria.component';
import { ComponentImageComponent } from './home/galeria/component-image/component-image.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DailyImageComponent } from './home/daily-image/daily-image.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    ComponentImageComponent,
    NavbarComponent,
    DailyImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
