import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainConfig } from '../mainConfig.module';

@Injectable()
export class HomePageService {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(`${MainConfig.pathUrl}popular?api_key=${MainConfig.apiKey}&${MainConfig.language}&page=1`);
    }
}