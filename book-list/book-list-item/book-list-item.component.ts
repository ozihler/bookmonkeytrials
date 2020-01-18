import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../shared/book";

@Component({
  selector: 'bm-book-list-item',
  template: `
    <li>{{book.isbn}}: {{book.title}}</li>`,
  styles: []
})
export class BookListItemComponent implements OnInit {
  @Input() book: Book;

  constructor() {
  }

  ngOnInit() {
  }

}
