import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  moviesListLength = 19;
  loopArray = Array(this.moviesListLength).fill(0);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelectingMovie() {
    this.router.navigate(['./', 'details', 5])
  }

}
