import { Component, OnInit } from '@angular/core';
import {ArticleServiceClient} from '../../services/article.service';
import {Article} from '../article';

@Component({
  selector: 'app-editor-profile',
  templateUrl: './editor-profile.component.html',
  styleUrls: ['./editor-profile.component.css']
})
export class EditorProfileComponent implements OnInit {

  constructor(private articleServiceClient: ArticleServiceClient) { }
  pwd = ''
  pwd2 = ''
  phoneOld = '999-999-9999'
  phoneNew = '';
  articles = [];
  isEditor = true;
  updateProfile(){}

  deleteArticle(article: Article) {
    console.log(article);
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    this.articleServiceClient.deleteArticle(article).then(res =>
      {this.articleServiceClient.getArticlesByEditor(user.username).
      then(response => this.articles = response);}
    );
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user != null){
      console.log(user.role);
      console.log(user.role === 'EDITOR');
    }
    this.articleServiceClient.getArticlesByEditor(user.username).then(res => this.articles = res);
  }
}
