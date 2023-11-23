import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesApisService {

  constructor(private httpClient: HttpClient) { }

  getPopularMovies() {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/popular')
  }
}
