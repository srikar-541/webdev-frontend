import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {NavigateBarComponent} from './navigate-bar/navigate-bar.component';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: '', component: NavigateBarComponent},
  {path: 'search', pathMatch: 'full', component: SearchComponent},
  {path: 'yolo', component: SearchComponent},
  {path: ':searchWord/:index', component: ArticleDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
