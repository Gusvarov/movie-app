import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

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
      const item: any = data.results;
      this.movies = item;
    })
  } 
  onclick() {
    for (let movie of this.movies) {
      this.moviesService
        .onClick(movie.id)
        .subscribe((data: any) => {
          const item: any = data;
          console.log(item.id);
        })
      }
  }
}
