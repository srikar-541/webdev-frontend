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
  articles = [ {title: 'title1'}, {title: 'title2'}, {title: 'title3'}];
  isEditor = true;
  updateProfile(){}
  deleteArticle(){}

  ngOnInit(): void {
    const userObj = JSON.parse(localStorage.getItem('loggedInUser'));
    if (userObj != null){
      this.isEditor = userObj.role === 'EDITOR';
    }
    console.log('in profile ' + JSON.parse(userObj));
    this.articleServiceClient.getArticlesByEditor(JSON.parse(userObj).username).then(res => this.articles = res);
  }
}
