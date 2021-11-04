import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations: [
        AppComponent,
        SideBarComponent,
        AppComponent,
        HeaderComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SwiperModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
