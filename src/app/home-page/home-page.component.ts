import { Component, OnInit } from '@angular/core';
import { MoviesService } from './home-page.service';

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

  ngOnInit() {
    this.moviesService
    .getData()
    .subscribe((data: any) => {
      const moviesArr: any = data.results;
      this.movies = moviesArr;
      console.log(data);
        for(let movie of moviesArr) {
          const baseUrl = 'https://image.tmdb.org/t/p/';
          const fileSize = 'w200';
          movie.poster = `${baseUrl}${fileSize}${movie.poster_path}`;
        }
    })
  }
}