import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../ipelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-main-peliculas',
  templateUrl: './main-peliculas.component.html',
  styleUrls: ['./main-peliculas.component.css'],
  providers: [ PeliculasService ]
})
export class MainPeliculasComponent implements OnInit {

  arrayPeliculas: IPelicula[] = [];
  peliculaParaDetallar: string;
  totalResults: number;

  /* Filtros de busqueda */
  _titleSearch = '';
  _yearSearch = '';

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
  }

  OnSearchClicked(searchFilter: any)
  {
    if (searchFilter.year !== undefined)
    {
      this.peliculasService.getPeliculasByTitleAndYear(searchFilter.title, searchFilter.year).subscribe(
        resultado => {
          this.arrayPeliculas = [];
          if(resultado.totalResults as unknown as number > 0)
          {
            this.totalResults = resultado.totalResults as unknown as number;
            resultado.Search.forEach((peliculaData: any) => {
              this.arrayPeliculas.push(
                {
                  Title: peliculaData.Title,
                  Year: peliculaData.Year as number,
                  imdbID: peliculaData.imdbID,
                  Type: peliculaData.Type,
                  Poster: peliculaData.Poster
                }
              );
            });
          }
      }, error => {
        console.log('Error:' + error)
      });
    }
    else
    {
      this.peliculasService.getPeliculasByTitle(searchFilter.title).subscribe(
        resultado => {
          this.arrayPeliculas = [];
          if(resultado.totalResults as unknown as number > 0)
          {
            this.totalResults = resultado.totalResults as unknown as number;
            resultado.Search.forEach((peliculaData: any) => {
              this.arrayPeliculas.push(
                {
                  Title: peliculaData.Title,
                  Year: peliculaData.Year as number,
                  imdbID: peliculaData.imdbID,
                  Type: peliculaData.Type,
                  Poster: peliculaData.Poster
                }
              );
            });
          }
      }, error => {
        console.log('Error:' + error)
      });
    }
  }

  OnPeliculaParaDetallar(id: string)
  {
    this.peliculaParaDetallar = id;
    document.getElementById("btnModal").click();
  }
}
