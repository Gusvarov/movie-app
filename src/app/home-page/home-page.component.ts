import { Component, OnInit, Input, Output } from '@angular/core';
import { MoviesService } from './home-page.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [MoviesService],
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  movies = [];
  movieDetails = []
  

  //@Input() movieId = 'neo'
  //@Output() event = new EventEmitter()

  ngOnInit() {
    this.moviesService
    .getData()
    .subscribe((data: any) => {
      const moviesArr: any = data.results;
      this.movies = moviesArr;
        for(let movie of moviesArr) {
          const baseUrl = 'https://image.tmdb.org/t/p/';
          const fileSize = 'w200';
          movie.poster = `${baseUrl}${fileSize}${movie.poster_path}`;
        }
    })
  }
  showMovieDetails(id) {
    this.movies.forEach(movie => {
      if (id === movie.id) {
        return id;
      }
    })
  }
  
}