import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainConfig } from '../mainConfig.module';

@Injectable()
export class MovieDetailsService {
    constructor(private http: HttpClient) { }

    getMovieDetails(id) {
        return this.http.get(`${MainConfig.pathUrl}${id}?api_key=${MainConfig.apiKey}&${MainConfig.language}`);
    }

    getSimilarMovies(id) {
        return this.http.get(`${MainConfig.pathUrl}${id}/similar?api_key=${MainConfig.apiKey}&${MainConfig.language}`)
    }
}