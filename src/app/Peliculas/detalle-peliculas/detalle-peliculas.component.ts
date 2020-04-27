import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { IPayloadPeliculaById } from '../ipayload-pelicula-by-id';

@Component({
  selector: 'app-detalle-peliculas',
  templateUrl: './detalle-peliculas.component.html',
  styleUrls: ['./detalle-peliculas.component.css'],
  providers: [ PeliculasService ]
})
export class DetallePeliculasComponent implements OnChanges {

  @Input() idPelicula: string;

  datosPelicula: IPayloadPeliculaById;

  constructor(private peliculasService: PeliculasService) { }

  ngOnChanges(): void {
    this.datosPelicula = undefined;

    this.peliculasService.getPeliculaById(this.idPelicula).subscribe(
      resultado => {
        if(resultado.Response == "True")
        {
          this.datosPelicula = resultado;
        }
    }, error => {
      console.log('Error:' + error)
    });
  }

}
