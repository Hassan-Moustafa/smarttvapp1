import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MediaPlayerPageComponent } from './pages/media-player-page/media-player-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'details/:id', component: MovieDetailsPageComponent
  },
  {
    path: 'search', component: SearchPageComponent
  },
  {
    path: 'player', component: MediaPlayerPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
