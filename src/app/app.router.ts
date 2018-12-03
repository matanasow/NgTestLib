import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { MoviesComponent } from './movies/movies.component'
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { UserFormComponent } from './user-form/user-form.component';

const appRoutes: Routes =
    [
        { path: '', component: MoviesComponent },
        { path: 'movie/:id', component: SelectedMovieComponent },
        { path: 'user-form', component: UserFormComponent }
    ]



export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
