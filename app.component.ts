import {Component} from '@angular/core';

@Component({
  selector: 'bm-root',
  template: `<h1>Book Monkey</h1>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
