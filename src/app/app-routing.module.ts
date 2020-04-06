import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {NavigateBarComponent} from './navigate-bar/navigate-bar.component';
import {SearchComponent} from './search/search.component';
import {HamburgerComponentComponent} from './hamburger-component/hamburger-component.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', pathMatch: 'full', component: SearchComponent},
  {path: 'search/:searchWord', pathMatch: 'full', component: SearchComponent},
  {path: 'search/:searchWord/:index', component: ArticleDetailComponent},
  {path: 'hamburger', component: HamburgerComponentComponent},
  {path: 'create-article', component: CreateArticleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
