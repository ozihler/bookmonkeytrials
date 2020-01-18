import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {NgModule} from "@angular/core";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'books/:isbn', component: BookDetailsComponent},
  {path: 'books', component: BookListComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
