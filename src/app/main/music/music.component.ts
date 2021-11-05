import { Component, OnInit } from '@angular/core';
import {Music} from "../../interface/music";
import {GetMusicService} from "../../service/get-music.service";
import {tap} from "rxjs/operators";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Tracks} from "../../interface/tracks";
import {DeezerMusic} from "../../interface/deezer-music";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  music: Music['data'] = [];
  tracks: DeezerMusic[] = [];
  formGroup: FormGroup;

  constructor(private httpService: GetMusicService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      input: ['']
    })
  }


  ngOnInit(): void {
    this.add();
  }
  add(): void{
    this.httpService.getRandomMusic().pipe(
      tap(value => this.tracks = value.tracks.data)
    ).subscribe()
  }
  /*addItemInContainer(writeMusic: string): void{
    this.httpService.getMusic(writeMusic)
      .pipe(
        tap(value => console.log(this.music = value.data))
      ).subscribe()
  }*/

}
