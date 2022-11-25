// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  API_TOKEN : "0d271ec451479b148ed4fcfb840d8061",
  AllURL:"https://api.themoviedb.org/3/movie/",
  PopularURL:"https://api.themoviedb.org/3/movie/popular?api_key=",
  UpcomingURL:"https://api.themoviedb.org/3/movie/upcoming?api_key=",
  TopRatedURL:"https://api.themoviedb.org/3/movie/top_rated?api_key=",
  searchURL:"https://api.themoviedb.org/3/search/movie?api_key=",
  TVAiringToday:"https://api.themoviedb.org/3/tv/airing_today?api_key="
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
