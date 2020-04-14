import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../article';
import {ArticleServiceClient} from '../../services/article.service';

@Component({
  selector: 'app-editor-article-detail',
  templateUrl: './editor-article-detail.component.html',
  styleUrls: ['./editor-article-detail.component.css']
})
export class EditorArticleDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: ArticleServiceClient) { }
  article: Article;
  category: string;
  articleId: string;
  comment: '';
  // call to backend to fetch the article.
  likeClicked(){
    alert('like clicked');
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:max-line-length
      this.category = params.categoryName;
      this.articleId = params.articleId;
      this.category = params.categoryName;
      this.service.getArticleById(this.articleId).then(res => this.article = res);
    });
  }

}
