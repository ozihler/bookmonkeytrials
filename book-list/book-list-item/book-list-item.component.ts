import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../shared/book";

@Component({
  selector: 'bm-book-list-item',
  template: `
    <ul>
      <li><a [routerLink]="['/books', book.isbn]">{{book.isbn}}: {{book.title}}</a></li>
    </ul>`,
  styles: []
})
export class BookListItemComponent implements OnInit {
  @Input() book: Book;

  constructor() {
  }

  ngOnInit() {
  }

}
