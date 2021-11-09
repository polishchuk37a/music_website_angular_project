import { Component, OnInit } from '@angular/core';
import {Music} from "../../interface/music";
import {GetMusicService} from "../../service/get-music.service";
import {tap} from "rxjs/operators";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Tracks} from "../../interface/tracks";
import {DeezerMusic} from "../../interface/deezer-music";
import {fromEvent} from "rxjs";

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
