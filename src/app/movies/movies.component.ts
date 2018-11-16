import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { MoviesModel } from './movies.model';

@Component({
  selector: 'te-st-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
popular: Object
theaters: Object

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => this.popular = data)
    this.moviesService.getTheaters().subscribe(data => this.theaters = data)
  }

}
