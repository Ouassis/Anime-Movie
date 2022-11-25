import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmDetailsComponent} from "./film-details/film-details.component";
import {AppComponent} from "./app.component";
import {ListPopularFilmComponent} from "./list-popular-film/list-popular-film.component";

const routes: Routes = [
  {path:"", component: ListPopularFilmComponent},
  {path:"details/:id",component: FilmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
