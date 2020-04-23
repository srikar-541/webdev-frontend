import { Component, OnInit } from '@angular/core';
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
  authorId: number;
  title = '';
  desc = '';
  url = '';
  imageUrl = '';
  category = '';
  articlePublished = false;
  aId: number;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    this.author = user.username;
    this.authorId = user.id;
  }

  saveArticle(): void {
    const newArticle: Article = {
      id: 0,
      authorId: this.authorId,
      author: this.author,
      title: this.title,
      desc: this.desc,
      url: this.imageUrl,
      imageUrl: this.imageUrl,
      publishedDate: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      content: this.desc,
      category: this.category
    };
    console.log(this.authorId);
    this.articleServiceClient.addArticle(newArticle).then(
      response => {
        this.articleServiceClient.validate(response);
        this.articlePublished = true;
        this.aId = response.id;
        this.category = response.category;
        if (this.aId !== 0){
          this.router.navigate(['category/' + this.category + '/detail/' + this.aId]);
        }
      }
    );
  }

  goToHomePage(): void {
    this.router.navigateByUrl('/');
  }
}
