import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HamburgerComponentComponent } from './hamburger-component/hamburger-component.component';
import { SearchComponent } from './search/search.component';
import { ResultListComponent } from './result-list/result-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ArticleServiceClient} from '../services/article.service';
import {CreateArticleComponent} from './create-article/create-article.component';
import { HttpClientModule } from '@angular/common/http';
import { EditorProfileComponent } from './editor-profile/editor-profile.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import {RegistrationServiceClient} from '../services/registration.service';
import { EditorListComponent } from './editor-list/editor-list.component';
import {LoginServiceClient} from '../services/login.service';
import { EditorArticleDetailComponent } from './editor-article-detail/editor-article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleDetailComponent,
    NavigateBarComponent,
    HamburgerComponentComponent,
    SearchComponent,
    ResultListComponent,
    LoginComponent,
    RegisterComponent,
    CreateArticleComponent,
    EditorProfileComponent,
    NavigateBarComponent,
    CategoryViewComponent,
    EditorListComponent,
    EditorArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ArticleServiceClient, RegistrationServiceClient, LoginServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
