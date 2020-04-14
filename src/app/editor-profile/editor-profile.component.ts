import { Component, OnInit } from '@angular/core';
import {ArticleServiceClient} from '../../services/article.service';

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

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user != null){
      console.log(user.role);
      console.log(user.role === 'EDITOR');
    }
    this.articleServiceClient.getArticlesByEditor(user.username).then(res => this.articles = res);
  }
}
