import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Mousewheel, Autoplay, Pagination, Navigation} from "swiper";
import {AlbumsInfo} from "../../interface/albums-info";
import {GetAlbumsService} from "../../service/get-albums.service";
import {filter, tap} from "rxjs/operators";
import {FindArtistService} from "../../service/find-artist.service";

SwiperCore.use([Mousewheel, Autoplay, Pagination, Navigation]);

@Component({
    selector: 'app-all-albums',
    templateUrl: './all-albums.component.html',
    styleUrls: ['./all-albums.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AllAlbumsComponent implements OnInit {

    albumDeezer: AlbumsInfo [] = [];

    constructor(private readonly deezerService: GetAlbumsService, private readonly findArtistService: FindArtistService) {
      this.findArtistService.albumArtist$.pipe(
        tap(value => {
          this.albumDeezer = value
        })
      ).subscribe()
    }

    ngOnInit(): void {
       this.deezerService.getAlbumsData().pipe(
            tap(item => {
                this.albumDeezer = item.data
            })
        ).subscribe();
    }



}
