import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../home-page/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  providers: [MoviesService],
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private movieDetails: MoviesService) { }

  movieDetail = [];

  ngOnInit() {
    this.movieDetails
    .getData()
    .subscribe((data: any) => {
      console.log(data);
      const item: any = data.results;
      this.movieDetail = item;
      console.log(item);
    })
  }
}
