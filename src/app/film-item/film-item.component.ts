import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Film} from '../Models/Film'

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
})

export class FilmItemComponent implements OnInit {
  @Input() film!: Film
  @Input() idx!: number
  @Output() selectedFilm = new EventEmitter<Film>()

  constructor() {
  }

  ngOnInit(): void {
  }

  getPoster(): string {
    return "https://image.tmdb.org/t/p/w300" + this.film.poster_path
  }

}
