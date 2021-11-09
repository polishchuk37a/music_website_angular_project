import { Component, OnInit } from '@angular/core';
import {GetMusicService} from "../../service/get-music.service";
import {tap} from "rxjs/operators";
import {DeezerMusic} from "../../interface/deezer-music";


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  tracks: DeezerMusic[] = [];

  constructor(private readonly getMusicService: GetMusicService) {
   this.getMusicService.music$.pipe(
     tap(value => this.tracks = value)
   ).subscribe()
  }

  ngOnInit(): void {
    this.getMusicService.getRandomMusic().pipe(
      tap(value => this.tracks = value.tracks.data)
    ).subscribe()
  }

}
