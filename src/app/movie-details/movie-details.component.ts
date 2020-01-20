import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from '../movie-details/movie-details.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  providers: [MovieDetailsService],
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private movieDetails: MovieDetailsService, private route: ActivatedRoute) { }
  
  movie = [];
  similarMovies = [];
  posterPathUrl: string = 'https://image.tmdb.org/t/p/';
  movieDetailposterPath: string;
  similarMoviePosterPath: string;
  id: number;
  
  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.movieDetails
    .getMovieDetails(this.id)
    .subscribe((data: any) => {
      this.movie = data;
      this.movieDetailposterPath = `${this.posterPathUrl}w400${data.poster_path}`;
    })
    this.movieDetails
    .getSimilarMovies(this.id)
    .subscribe((data: any) => {
      this.similarMovies = data.results;
     this.similarMoviePosterPath = `${this.posterPathUrl}w200`;
    })
  }
}