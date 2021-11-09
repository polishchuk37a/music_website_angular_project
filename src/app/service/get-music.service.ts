import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Music} from "../interface/music";
import {Tracks} from "../interface/tracks";
import {tap} from "rxjs/operators";
import {DeezerMusic} from "../interface/deezer-music";

@Injectable({
  providedIn: 'root'
})
export class GetMusicService {

  music$ = new BehaviorSubject<DeezerMusic[]>([]);
  artistMusic = this.music$.asObservable();

  constructor(private readonly httpClient: HttpClient, private readonly jsonp: HttpClientJsonpModule) { }

  getRandomMusic(): Observable<Tracks>{
    return this.httpClient.jsonp<Tracks>('https://api.deezer.com/chart&output=jsonp', 'callback');
  }

  getMusic(writeMusic: string){
    const apiSearch = `https://api.deezer.com/search?q=artist:'${writeMusic.trim()}'&output=jsonp`

    this.httpClient.jsonp<Music>(apiSearch,'callback').pipe(
      tap(value => this.music$.next(value.data))
    ).subscribe();
  }
}
