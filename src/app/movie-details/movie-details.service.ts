import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainConfig } from '../app-config.constant';

@Injectable()
export class MovieDetailsService {
    constructor(private http: HttpClient) { }

    getMovieDetails(id) {
        return this.http.get(`${MainConfig.PATH_URL}${id}?api_key=${MainConfig.API_KEY}&${MainConfig.LANGUAGE}`);
    }

    getSimilarMovies(id) {
        return this.http.get(`${MainConfig.PATH_URL}${id}/similar?api_key=${MainConfig.API_KEY}&${MainConfig.LANGUAGE}`)
    }
}