import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import { SwiperModule } from "swiper/angular";
import { AllAlbumsComponent } from './main/all-albums/all-albums.component';
import { BestAlbumComponent } from './main/best-album/best-album.component';
import { MusicComponent } from './main/music/music.component';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        SideBarComponent,
        AppComponent,
        HeaderComponent,
        MainComponent,
        AllAlbumsComponent,
        BestAlbumComponent,
        MusicComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
