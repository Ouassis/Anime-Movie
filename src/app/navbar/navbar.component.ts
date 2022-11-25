import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {FilmItemComponent} from "../film-item/film-item.component";
import {FilmService} from "../services/film.service";
import {Film} from "../Models/Film";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchTitle: string='';
  @Input() filmsearched!: Array<Film>;

  constructor(private filmService: FilmService) {
  }
  ngOnInit(): void {
  }

  searchMovies() {
    this.filmService.searchMovies(this.searchTitle)
      .then((data:any)=>{
        this.filmsearched = data.results;
    })
  }
}
