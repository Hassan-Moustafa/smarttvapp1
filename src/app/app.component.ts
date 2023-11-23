import { Component } from '@angular/core';

declare var SpatialNavigation: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviesapp';

  ngOnInit() {
    SpatialNavigation.init();

    SpatialNavigation.add({
      id: 'app',
      selector: '.focusable, #bmpui-id-187, .bmpui-ui-seekbar'
    });

    SpatialNavigation.makeFocusable();
  }
}
