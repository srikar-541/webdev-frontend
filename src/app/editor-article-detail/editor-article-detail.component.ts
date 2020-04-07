import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../article';

@Component({
  selector: 'app-editor-article-detail',
  templateUrl: './editor-article-detail.component.html',
  styleUrls: ['./editor-article-detail.component.css']
})
export class EditorArticleDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  article: Article;
  category: string;
  articleId: string;
  // call to backend to fetch the article.
  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.category = params.categoryName;
    this.articleId = params.articleId;
    });
  }

}
