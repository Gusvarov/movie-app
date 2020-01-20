import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [HomePageService],
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private moviesService: HomePageService) { }

  movies = [];

  ngOnInit() {
    this.moviesService
    .getData()
    .subscribe((data: any) => {
      this.movies = data.results;
        for(let movie of this.movies) {
          movie.poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        }
    })
  }
}