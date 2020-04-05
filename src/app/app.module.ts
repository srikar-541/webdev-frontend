import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HamburgerComponentComponent } from './hamburger-component/hamburger-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleDetailComponent,
    NavigateBarComponent,
    HamburgerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
