import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler() {
    this.onClick.emit();
  }

}
