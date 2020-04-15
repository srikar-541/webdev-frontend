import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ArticleServiceClient} from '../../services/article.service';
import {Article} from '../article';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  constructor(private router: Router,
              private articleServiceClient: ArticleServiceClient) { }
  author = '';
  title = '';
  desc = '';
  url = '';
  imageUrl = '';
  category = '';
  articlePublished = false;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    this.author = user.username;
  }

  saveArticle(): void {
    const newArticle: Article = {
      id: 0,
      author: this.author,
      title: this.title,
      desc: this.desc,
      url: this.imageUrl,
      imageUrl: this.imageUrl,
      publishedDate: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      content: this.desc,
      category: this.category
    };
    this.articleServiceClient.addArticle(newArticle).then(
      response => {
        this.articleServiceClient.validate(response);
        this.articlePublished = true;
      }
    );
  }

  goToHomePage(): void {
    this.router.navigateByUrl('/');
  }
}
