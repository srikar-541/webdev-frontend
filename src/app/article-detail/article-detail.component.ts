import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  constructor() { }

  article = {author: '', title: '', description: '', url: '',  urlToImage: '', publishedAt: '', content: ''}



  ngOnInit(): void {
    this.article = history.state.data;
  }

}
