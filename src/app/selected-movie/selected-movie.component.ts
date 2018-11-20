import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../movies/movies.service';
import { MovieModel } from '../movies/movie.model';
@Component({
  selector: 'te-st-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {

myMovie;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      debugger
      let id = params['id']
      this.moviesService.getMovie(id)
      .subscribe(data => this.myMovie = data)
    })
  }

}
