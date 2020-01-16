import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../home-page/home-page.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  providers: [MoviesService],
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private movieDetails: MoviesService) { }
  movies = [];
  movieDetail = [];
  movie = [];
  
  ngOnInit() {
    this.movieDetails
    .getData()
    .subscribe((data: any) => {
      const movies: any = data.results;
      this.movies = movies;
      for(let movie of movies) {
        this.movie = movie.id;
      }
      console.log(this.movie);
    })
  }
  showMovieDetails() {
    this.movies.forEach(movie => {
      this.movieDetails
        .getMovieDetails(movie.id)
        .subscribe((data: any) => {
          const movies: any = data;
          // for(let movie in movies) {
            this.movieDetail.push(movies);
            console.log(this.movieDetail)
          // } 
        })
    })
  }
}