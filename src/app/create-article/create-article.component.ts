import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ArticleServiceClient} from '../../services/article.service';
import {Article} from '../article';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  constructor(private articleServiceClient: ArticleServiceClient) { }
  author = '';
  title = '';
  description = '';
  url = '';
  urlToImage = '';
  content = '';
  category = '';

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
    this.author = user.username;
  }

  saveArticle(): void {
    const newArticle: Article = {
      id: 0,
      author: this.author,
      title: this.title,
      description: this.description,
      url: '',
      urlToImage: this.urlToImage,
      publishedAt: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      content: this.content,
      category: this.category
    };
    this.articleServiceClient.addArticle(newArticle);
  }
}
