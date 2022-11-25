import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPopularFilmComponent } from './list-popular-film/list-popular-film.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FilmService} from "./services/film.service";
import {BarRatingModule} from "ngx-bar-rating";
import {RatingConfig, RatingModule} from "ngx-bootstrap/rating";
import {FormsModule} from "@angular/forms";
import {CarouselModule} from "ngx-bootstrap/carousel";

@NgModule({
  declarations: [
    AppComponent,
    ListPopularFilmComponent,
    FilmItemComponent,
    FilmItemComponent,
    NavbarComponent,
    FilmDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BarRatingModule,
    RatingModule,
    FormsModule,
    CarouselModule
  ],
  providers: [FilmService,HttpClient,RatingConfig],
  bootstrap: [AppComponent]
})


export class AppModule { }
