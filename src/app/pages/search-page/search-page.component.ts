import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchValue: string = ''
  keyBoardKeys: (Key[])[] = [
    [{icon: 'bi-backspace', action: this.removeCharacter.bind(this)}, {icon: 'bi-usb-fill', action: () => this.onAddCharacter(' ')}],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['g', 'h', 'i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p', 'q', 'r'],
    ['s', 't', 'u', 'v', 'w', 'x'],
    ['y', 'z', '1', '2', '3', '4'],
    ['5', '6', '7', '8', '9', '0'],
  ]
  constructor() { }

  ngOnInit(): void {
  }

  isString(variable: Key): variable is string {
    return typeof variable === 'string';
  }

  onAddCharacter(key: Key) {
    if(this.isString(key)) {
      this.searchValue += key;
    } else {
      key.action();
    }
  }

  removeCharacter() {
    this.searchValue = this.searchValue.slice(0,  - 1);
  }

}

type Key = string | { icon: string; action: any };

