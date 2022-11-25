import { Component, OnInit } from '@angular/core';
import {Film} from "../Models/Film";
import {FilmService} from "../services/film.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  genres='';
  companies='';
  film!:Film;
  constructor(private filmservice : FilmService, private route : ActivatedRoute) {
  }

  ngOnInit() {
    const id : number = this.route.snapshot.params['id'];
    this.filmservice.getMovieById(+id).then((res:Film)=>{
      this.film=res;
      this.genres=res.genres.map(x=>x.name).join('/');
      this.companies=res.production_companies.map(x=>x.name).join('/');
    })
  }
}
