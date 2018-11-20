import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTestLibModule } from '../../projects/ng-test-lib/src/lib/ng-test-lib.module'
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http'
import { MoviesService } from './movies/movies.service';
import { MovieComponent } from './movie/movie.component'
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { routing } from './app.router'


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    SelectedMovieComponent
  ],
  imports: [
    BrowserModule, 
    NgTestLibModule,
    HttpClientModule,
    routing
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
