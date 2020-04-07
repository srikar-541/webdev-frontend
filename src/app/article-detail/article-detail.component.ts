import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  index = ''
  articles = []
  searchWord = ''
  // article = {author: '', title: '', description: '', url: '',  urlToImage: '', publishedAt: '', content: '', articleId: ''}
  article = {}
  searchNews = () =>
    fetch(`http://newsapi.org/v2/everything?q=${this.searchWord}&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
      .then(response => response.json())
      .then(results => {this.articles = results.articles; this.article = this.articles[this.index]; })

  ngOnInit(): void {
    this.route.params.subscribe( params =>  {
      this.searchWord  = params.searchWord;
      this.index = params.index;
    });
    this.searchNews();
  }

}
