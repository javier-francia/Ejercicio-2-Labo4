import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PeliculasModule } from './Peliculas/peliculas.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PeliculasModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
