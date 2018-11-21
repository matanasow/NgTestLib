import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MovieModel } from './movie.model';
import { MoviesModel } from './movies.model';

const apiKey = 'a4e93bc63327423a9c465733c107074f';

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/'
    popular: string = 'discover/movie?sort_by=popularity.desc'
    theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
    kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
    drama: string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'
    movie: string = 'movie/'
    movieAuth: string = '?api_key='
    authentication: string = '&api_key='

    constructor(private http: HttpClient) {

    }

    getPopular(): Observable<MoviesModel>{
        return this.http.get<MoviesModel>(`${this.path}${this.popular}${this.authentication}${apiKey}`)
    }

    getTheaters(): Observable<MoviesModel>{
        return this.http.get<MoviesModel>(`${this.path}${this.theaters}${this.authentication}${apiKey}`)
    }
    getKids(): Observable<MoviesModel>{
        return this.http.get<MoviesModel>(`${this.path}${this.kids}${this.authentication}${apiKey}`)
    }
    getDrama(): Observable<MoviesModel>{
        return this.http.get<MoviesModel>(`${this.path}${this.drama}${this.authentication}${apiKey}`)
    }
    getMovie(id: number){
        return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`)
    }
    findAMovie(search){
        debugger
        return this.http.get(`${this.path}`+ "search/movie?query=" + search + "&api_key=" + apiKey)
    }
}