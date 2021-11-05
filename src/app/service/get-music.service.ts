import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Music} from "../interface/music";
import {Tracks} from "../interface/tracks";

@Injectable({
  providedIn: 'root'
})
export class GetMusicService {

  constructor(private readonly httpClient: HttpClient, private readonly jsonp: HttpClientJsonpModule) { }

  getRandomMusic(): Observable<Music['data']>{
    return this.httpClient.jsonp<Music['data']>('https://api.deezer.com/chart&output=jsonp', 'callback');
  }

  getMusic(writeMusic: string): Observable<Music>{
    const apiSearch = `https://api.deezer.com/search?q=track:'${writeMusic}'&output=jsonp`

    return this.httpClient.jsonp<Music>(apiSearch,'callback');
  }
}
