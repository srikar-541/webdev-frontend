import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {NavigateBarComponent} from './navigate-bar/navigate-bar.component';
import {SearchComponent} from './search/search.component';
import {HamburgerComponentComponent} from './hamburger-component/hamburger-component.component';

const routes: Routes = [
  {path: '', component: NavigateBarComponent},
  {path: 'search', pathMatch: 'full', component: SearchComponent},
  {path: 'search/:searchWord', pathMatch: 'full', component: SearchComponent},
  {path: 'search/:searchWord/:index', component: ArticleDetailComponent},
  {path: 'hamburger', component: HamburgerComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
