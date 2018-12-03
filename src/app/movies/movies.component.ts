import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { MoviesModel } from './movies.model';
import { MovieModel } from './movie.model';

@Component({
  selector: 'te-st-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
popular: Array<MovieModel>
theaters: Array<MovieModel>
kids: Array<MovieModel>
drama: Array<MovieModel>
searchedRes: any
isSearch: boolean
  constructor(private moviesService: MoviesService) { }

  search(myQuery){
    let searchValue = myQuery['search']
    this.moviesService.findAMovie(searchValue)
    .subscribe(data => {
      this.searchedRes = data
      if(this.searchedRes.length > 0){
      this.isSearch = true
      }
    })
  }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => this.popular = data.results)
    this.moviesService.getTheaters().subscribe(data => this.theaters = data.results)
    this.moviesService.getKids().subscribe(data => this.kids = data.results)
    this.moviesService.getDrama().subscribe(data => this.drama = data.results)
  }

}
