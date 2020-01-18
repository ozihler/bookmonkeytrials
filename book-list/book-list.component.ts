import {Component, OnInit} from '@angular/core';
import {Book} from "../shared/book";
import {BookStoreService} from "../shared/book-store.service";

@Component({
  selector: 'bm-book-list',
  template: `
    <a routerLink="">Zurück zur Übersicht</a>
    <div>
      <bm-book-list-item *ngFor="let book of books" [book]="book"></bm-book-list-item>
    </div>
  `,
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookStoreService: BookStoreService) {
  }

  ngOnInit() {
    this.books = this.bookStoreService.getBooks();
  }
}
