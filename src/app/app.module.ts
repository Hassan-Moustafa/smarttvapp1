import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component'
import { FormsModule } from '@angular/forms';
import { MediaPlayerPageComponent } from './pages/media-player-page/media-player-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieCardComponent,
    MovieDetailsPageComponent,
    SearchPageComponent,
    MediaPlayerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
