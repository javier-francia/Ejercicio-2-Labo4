import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IPelicula } from '../ipelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  titleFilter: string;
  yearFilter: number;
  firstSearch = true;

  @Input() listadoPeliculasMostrar: IPelicula[];
  @Input() totalResultados: number;
  @Output() searchFilters: EventEmitter<any> = new EventEmitter<any>();
  @Output() peliculaDetails: EventEmitter<any> = new EventEmitter<any>();

  imgWidth = '100';
  imgHeight = '100';
  NA = '../../../assets/naPoster.jpg';



  constructor() { }

  ngOnInit(): void {}


  EnviarFiltros()
  {
    let searchContent;
    if (this.titleFilter !== '' && this.titleFilter !== undefined)
    {
      if (this.yearFilter !== undefined && this.yearFilter !== null)
      {
        searchContent = {
          title: this.titleFilter,
          year: this.yearFilter
        };
      }
      else
      {
        searchContent = {
          title: this.titleFilter
        };
      }
      this.searchFilters.emit(searchContent);
      this.firstSearch = false;
    }
    else
    {

    }
  }

  OnPeliculaDetails(id: string)
  {
    this.peliculaDetails.emit(id);
  }
}
