import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {NavigateBarComponent} from './navigate-bar/navigate-bar.component';


const routes: Routes = [
  {path: '', component: NavigateBarComponent},
  {path: ':searchWord/:index', component: ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
