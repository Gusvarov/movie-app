import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movie-details/movie-details.service';

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
  
  @Input() homePageData;

  setDataFromHomepage(data) {
    this.homePageData = data;
  }

  ngOnInit() {
    this.movieDetails
    .getData()
    .subscribe((data: any) => {
      const movies: any = data.results;
      this.movies = movies;
      console.log(movies);
      // for(let movie of movies) {
      //   this.movie = movie;
      //   console.log(this.movie)
      // }
    })
  }
  showMovieInfo() {
    // this.movieDetail
    // .getMovieDetails(id)
    console.log(this.homePageData);
  }
}

//this.movieDetails
      //   .getMovieDetails(movie.id)
      //   .subscribe((data: any) => {
      //     const movies: any = data;
      //     // for(let movie in movies) {
      //       this.movieDetail.push(movies);
      //       console.log(this.movieDetail)
      //     // } 
      //   })