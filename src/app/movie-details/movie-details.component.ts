import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../movie-details/movie-details.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  providers: [MoviesService],
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private movieDetails: MoviesService, private route: ActivatedRoute) { }
  
  movies = [];
  movie = [];
  similarMovies = [];
  movieDetailposterPath: string;
  similarMoviePosterPath: string;
  id: number;
  
  ngOnInit() {
    this.movieDetails
    .getData()
    .subscribe((data: any) => {
      this.movies = data.results;
    })
    this.id = +this.route.snapshot.params.id;
    this.movieDetails
    .getMovieDetails(this.id)
    .subscribe((data: any) => {
      this.movie = data;
      this.movieDetailposterPath = `https://image.tmdb.org/t/p/w400/${data.poster_path}`;
    })
    this.movieDetails
    .getSimilarMovies(this.id)
    .subscribe((data: any) => {
      this.similarMovies = data.results;
     this.similarMoviePosterPath = `https://image.tmdb.org/t/p/w200/`;
    })
  }
}