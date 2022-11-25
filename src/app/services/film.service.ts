import {Injectable, Input} from '@angular/core';
import {Film} from "../Models/Film";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: Array<Film> = [];

  constructor(private http: HttpClient) {
    this.films = [];
  }

  getTvAiringToday(films: Film[]) {
    return this.http.get(environment.TVAiringToday + environment.API_TOKEN).toPromise()
      .then((data: any) => data.results.map((response: any, key = response.id) => {
        films.push(new Film(response.adult, response.id, response.backdrop_path, response.genre_ids, response.original_language, response.original_title, response.overview, response.popularity, response.poster_path, response.release_date, response.title, response.video, response.vote_average, response.vote_count,response.genres,response.production_companies))
      }))
  }

  getPopular(films: Film[]) {
    return this.http.get(environment.PopularURL + environment.API_TOKEN).toPromise()
      .then((data: any) => data.results.map((response: any, key = response.id) => {
        films.push(new Film(response.adult, response.id, response.backdrop_path, response.genre_ids, response.original_language, response.original_title, response.overview, response.popularity, response.poster_path, response.release_date, response.title, response.video, response.vote_average, response.vote_count,response.genres,response.production_companies))
      }))
  }
  getUpcomingMovies(films: Film[]) {
    return this.http.get(environment.UpcomingURL + environment.API_TOKEN).toPromise()
      .then((data: any) => data.results.map((response: any, key = response.id) => {
        films.push(new Film(response.adult, response.id, response.backdrop_path, response.genre_ids, response.original_language, response.original_title, response.overview, response.popularity, response.poster_path, response.release_date, response.title, response.video, response.vote_average, response.vote_count,response.genres,response.production_companies))
      }))
  }
  getTopRatedMovies(films: Film[]) {
    return this.http.get(environment.TopRatedURL + environment.API_TOKEN).toPromise()
      .then((data: any) => data.results.map((response: any, key = response.id) => {
        films.push(new Film(response.adult, response.id, response.backdrop_path, response.genre_ids, response.original_language, response.original_title, response.overview, response.popularity, response.poster_path, response.release_date, response.title, response.video, response.vote_average, response.vote_count,response.genres,response.production_companies))
      }))
  }
  searchMovies(searchTitle: string){
    return this.http.get(environment.searchURL+environment.API_TOKEN+'&language=fr&query=' + searchTitle).toPromise()
      .then((response: any) => {
        console.log(response)
        return response;
      })
  }
  getMovieById(id:number){
    return this.http.get(environment.AllURL + id + '?api_key=' + environment.API_TOKEN + '&language=fr').toPromise()
      .then((response: any) => {
        console.log(response)
        return response;
      })
  }

}
