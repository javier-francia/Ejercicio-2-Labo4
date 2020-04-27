import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPayloadPeliculas } from './ipayload-peliculas';
import { IPayloadPeliculaById } from './ipayload-pelicula-by-id';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private BaseUrl = 'https://www.omdbapi.com/';
  private ApiKey = 'cd40e894';

  constructor(private http: HttpClient) { }

  public getPeliculasByTitle(title: string)
  {
    let endpoint = `${this.BaseUrl}?s=${title}&apikey=${this.ApiKey}`;
    return this.http.get<IPayloadPeliculas>(endpoint);
  }

  public getPeliculasByTitleAndYear(title: string, year: number)
  {
    let endpoint = `${this.BaseUrl}?s=${title}&y=${year}&apikey=${this.ApiKey}`;
    return this.http.get<IPayloadPeliculas>(endpoint);
  }

  public getPeliculaById(id: string)
  {
    let endpoint = `${this.BaseUrl}?i=${id}&apikey=${this.ApiKey}`;
    return this.http.get<IPayloadPeliculaById>(endpoint);
  }
}
