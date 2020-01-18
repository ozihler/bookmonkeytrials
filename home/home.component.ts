import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bm-home',
  template: `
    <div>
      <a routerLink="/books">Alle Bücher anzeigen</a>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
