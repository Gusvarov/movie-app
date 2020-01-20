import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainConfig } from '../app-config.constant';

@Injectable()
export class HomePageService {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(`${MainConfig.PATH_URL}popular?api_key=${MainConfig.API_KEY}&${MainConfig.LANGUAGE}&page=1`);
    }
}