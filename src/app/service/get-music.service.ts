import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Music} from "../interface/music";

@Injectable({
  providedIn: 'root'
})
export class GetMusicService {

  constructor(private readonly httpClient: HttpClient) { }

    getMusic(writeMusic: string): Observable<Music>{
      const apiSearch = `https://api.deezer.com/search?q=track:'${writeMusic}'&output=jsonp`

      return this.httpClient.jsonp<Music>(apiSearch,'callback');
    }
}
