import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
