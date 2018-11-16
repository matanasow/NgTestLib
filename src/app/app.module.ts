import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTestLibModule } from '../../projects/ng-test-lib/src/lib/ng-test-lib.module'
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http'
import { MoviesService } from './movies/movies.service'


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule, 
    NgTestLibModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
