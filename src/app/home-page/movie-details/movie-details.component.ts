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
  movieDetail = [];
  movie = [];
  similarMovies = [];

  id: number;
  
  ngOnInit() {
    this.movieDetails
    .getData()
    .subscribe((data: any) => {
      const movies: any = data.results;
      this.movies = movies;
    })
    this.id = +this.route.snapshot.params.id;
    console.log(this.id);
    this.movieDetails
    .getMovieDetails(this.id)
    .subscribe((data: any) => {
      this.movie = data;
      console.log(data);
    })
    this.movieDetails
    .getSimilarMovies(this.id)
    .subscribe((data: any) => {
      this.similarMovies = data.results;
      console.log(this.similarMovies);
    })
  }
}

