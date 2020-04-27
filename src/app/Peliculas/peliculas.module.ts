import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPeliculasComponent } from './main-peliculas/main-peliculas.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { DetallePeliculasComponent } from './detalle-peliculas/detalle-peliculas.component';




@NgModule({
  declarations: [
    MainPeliculasComponent,
    ListadoPeliculasComponent,
    DetallePeliculasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MainPeliculasComponent,
  ]
})
export class PeliculasModule { }
