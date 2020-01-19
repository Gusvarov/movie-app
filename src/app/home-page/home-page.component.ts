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

  ngOnInit() {
    this.moviesService
    .getData()
    .subscribe((data: any) => {
      const moviesArr: any = data.results;
      this.movies = moviesArr;
        for(let movie of moviesArr) {
          movie.poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        }
    })
  }
}

 