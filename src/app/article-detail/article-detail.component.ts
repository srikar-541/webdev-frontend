import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExternalServiceClient} from '../../services/externalServiceClient';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: ExternalServiceClient) { }
  index = ''
  articles = []
  searchWord = ''
  article = {author: '', title: '', desc: '', url: '',  urlToImage: '', publishedAt: '', content: '', articleId: ''};
  // article = {}

  ngOnInit(): void {
    this.route.params.subscribe( params =>  {
      this.searchWord  = params.searchWord;
      this.index = params.index;
      this.service.getArticleDetail(this.searchWord).
      then(results => {this.article = results.articles[this.index]; });
    });
  }
}
