import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { Routes, RouterModule } from '@angular/router';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {HomeComponent} from './home/home.component';
import {EditorProfileComponent} from './editor-profile/editor-profile.component';
import {CategoryViewComponent} from './category-view/category-view.component';
import {EditorArticleDetailComponent} from './editor-article-detail/editor-article-detail.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'eprofile', component: EditorProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:profileId', component: ProfileComponent},
  {path: 'search', pathMatch: 'full', component: SearchComponent},
  {path: 'search/:searchWord', pathMatch: 'full', component: SearchComponent},
  {path: 'search/:searchWord/details/:index', component: ArticleDetailComponent},
  {path: 'create-article', component: CreateArticleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'category/:searchWord', component: CategoryViewComponent},
  {path: 'category/:categoryName/detail/:articleId', component: EditorArticleDetailComponent},
  {path: 'admin', component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
