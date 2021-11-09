import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {tap} from "rxjs/operators";
import {AlbumsInfo} from "../interface/albums-info";
import {GetAlbumsService} from "./get-albums.service";
import {GetMusicService} from "./get-music.service";

@Injectable({
  providedIn: 'root'
})
export class FindArtistService {

  private artistAlbum$ = new BehaviorSubject<AlbumsInfo[]>([]);
  albumArtist$ = this.artistAlbum$.asObservable();

  constructor(private readonly getAlbumsService: GetAlbumsService) {
  }

  findArtistAlbum(artistName: string) {
    this.getAlbumsService.findArtist(artistName.trim()).pipe(
      tap(value => {
        this.artistAlbum$.next(value.data)
      })
    ).subscribe()
  }
}
