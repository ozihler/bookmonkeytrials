import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../shared/book";
import {ActivatedRoute} from "@angular/router";
import {BookStoreService} from "../shared/book-store.service";

@Component({
  selector: 'bm-book-details',
  template: `<a routerLink="/books">Show List</a>
    <h1>Titel: {{book.title}}</h1>
  `,
  styles: []
})
export class BookDetailsComponent implements OnInit {

  private book: Book;
  constructor(private bookStoreService: BookStoreService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>  {
      this.book = this.bookStoreService.findByIsbn(paramMap.get('isbn'));
    });
  }
}
