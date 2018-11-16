import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MovieModel } from './movie.model';

const apiKey = 'a4e93bc63327423a9c465733c107074f';

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/'
    popular: string = 'discover/movie?sort_by=popularity.desc'
    theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
    authentication: string = '&api_key='

    constructor(private http: HttpClient) {

    }

    getPopular(): Observable<MovieModel>{
        return this.http.get<MovieModel>(`${this.path}${this.popular}${this.authentication}${apiKey}`)
    }

    getTheaters(): Observable<MovieModel>{
        return this.http.get<MovieModel>(`${this.path}${this.theaters}${this.authentication}${apiKey}`)
    }
}