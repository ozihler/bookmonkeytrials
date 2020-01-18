import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {RouterModule} from "@angular/router";
import { BookListItemComponent } from './book-list/book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
