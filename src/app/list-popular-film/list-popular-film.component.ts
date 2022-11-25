import {Component, Input, OnInit} from '@angular/core';
import {FilmItemComponent} from '../film-item/film-item.component'
import {Film} from "../Models/Film";
import {FilmService} from "../services/film.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-list-popular-film',
  templateUrl: './list-popular-film.component.html',
  styleUrls: ['./list-popular-film.component.scss'],
})
export class ListPopularFilmComponent implements OnInit {
  films!:Array<Film>;
  topfilms!:Array<Film>;
  upcoming!:Array<Film>;
  tvs!:Array<Film>;
  searchTitle: any;

  constructor(private filmservice: FilmService) {
  }

  ngOnInit(): void {
    this.films=[]
    this.topfilms=[]
    this.upcoming=[]
    this.tvs=[]
    this.filmservice.getPopular(this.films)
    this.filmservice.getTopRatedMovies(this.topfilms)
    this.filmservice.getUpcomingMovies(this.upcoming)
    this.filmservice.getTvAiringToday(this.tvs)
  }

  showalert($event: Film){
    alert($event.overview)

  }


  searchMovies() {
    this.filmservice.searchMovies(this.searchTitle)
      .then((data:any)=>{
        this.films = data.results;
      })
  }
}
