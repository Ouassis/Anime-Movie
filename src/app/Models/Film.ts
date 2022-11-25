import {ArrayType} from "@angular/compiler";

export class Film{
  adult:any;
  id:number;
  backdrop_path:string;
  genre_ids:Array<number>;
  original_language:string;
  original_title:string;
  overview:string;
  popularity:number;
  poster_path:string;
  release_date:string;
  title:string;
  video:any;
  vote_average:number;
  vote_count:number;
  genres:{id: number, name: string}[];
  production_companies:{id: number, logo_path: string, name: string, origin_country: string}[];


  constructor(adult: any, id: number, backdrop_path: string, genre_ids: Array<number>, original_language: string, original_title: string, overview: string, popularity: number, poster_path: string, release_date: string, title: string, video: any, vote_average: number, vote_count: number,genres:{id: number, name: string}[],production_companies:{id: number, logo_path: string, name: string, origin_country: string}[]) {
    this.adult = adult;
    this.id = id;
    this.backdrop_path = backdrop_path;
    this.genre_ids = genre_ids;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.title = title;
    this.video = video;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
    this.genres=genres;
    this.production_companies=production_companies;
  }
}
