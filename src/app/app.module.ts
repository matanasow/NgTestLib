//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTestLibModule } from '../../projects/ng-test-lib/src/lib/ng-test-lib.module'
import { HttpClientModule } from '@angular/common/http'
import { routing } from './app.router'
import { FormsModule } from '@angular/forms'

//Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieComponent } from './movie/movie.component'
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';

//Services
import { MoviesService } from './movies/movies.service';

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
    FormsModule,
    routing
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
