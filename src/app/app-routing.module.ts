import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {NavigateBarComponent} from './navigate-bar/navigate-bar.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: '', component: NavigateBarComponent},
  {path: 'search', pathMatch: 'full', component: SearchComponent},
  {path: 'search/:searchWord', pathMatch: 'full', component: SearchComponent},
  {path: 'search/:searchWord/:index', component: ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
