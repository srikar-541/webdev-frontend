import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {SearchViewComponent} from './search-view/search-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details', component: ArticleDetailComponent},
  {path: 'yolo', component: SearchViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
