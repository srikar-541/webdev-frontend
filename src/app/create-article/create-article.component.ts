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
  }
  saveArticle(): void {
    const newArticle: Article = {
      author: this.author,
    title: this.title,
    description: this.description,
    url: this.urlToImage,
    urlToImage: this.urlToImage,
    publishedAt: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
    content: this.content,
      category: this.category
    };
    // console.log(this.title);
    this.articleServiceClient.addArticle(newArticle);
  }
}
