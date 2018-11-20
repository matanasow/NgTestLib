import {Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { MoviesComponent } from './movies/movies.component'
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';

const appRoutes: Routes = 
[{ path: '', component: MoviesComponent },
{ path: 'movie/:id', component: SelectedMovieComponent}
]



export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
