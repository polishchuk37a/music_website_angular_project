import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AllAlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
