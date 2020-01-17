import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=8d148f368870f05017675f58b427b87b&language=en-US&page=1');
    }

    getMovieDetails(data) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${data}?api_key=8d148f368870f05017675f58b427b87b&language=en-US`);
    }
}