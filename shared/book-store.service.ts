import {Injectable} from '@angular/core';
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private books: Book[];

  constructor() {
    this.books = [
      {isbn: "12", title: "hello world", authors: ["A1", "A2"], published: new Date()},
      {isbn: "13", title: "hello world 1", authors: ["A1", "A2"], published: new Date()},
      {isbn: "14", title: "hello world 2", authors: ["A1", "A2"], published: new Date()},
      {isbn: "15", title: "hello world 3", authors: ["A1", "A2"], published: new Date()},
      {isbn: "16", title: "hello world 4", authors: ["A1", "A2"], published: new Date()},
      {isbn: "17", title: "hello world 5", authors: ["A1", "A2"], published: new Date()}

    ];
  }


  getBooks() {
    return this.books;
  }

  findByIsbn(isbn: string) {
    return this.books.find(book => book.isbn === isbn);
  }
}
