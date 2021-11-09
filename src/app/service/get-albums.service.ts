import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AlbumsInfo} from "../interface/albums-info";
import {HttpClient} from "@angular/common/http";
import {Albums} from "../interface/albums";

@Injectable({
  providedIn: 'root'
})
export class GetAlbumsService {

  apiArtist = 'https://api.deezer.com/search/?q=';
  apiAlbum = 'https://api.deezer.com/search?q=album&output=jsonp';

  constructor(private readonly http: HttpClient) {
  }

  getAlbumsData(): Observable<Albums> {
    return this.http.jsonp<Albums>(this.apiAlbum, 'callback');
  }

  findArtist(artistName: string): Observable<Albums> {
    const url = `${this.apiArtist}"${artistName}"&output=jsonp`;
    return this.http.jsonp<Albums>(url, 'callback')
  }
}
