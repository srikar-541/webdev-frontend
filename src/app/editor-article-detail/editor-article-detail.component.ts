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
  comment: string;
  comments = [];
  likeClicked(){
    alert('like clicked');
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:max-line-length
      this.articleId = params.articleId;
      this.category = params.categoryName;
      this.service.getArticleById(this.articleId).then(res => this.article = res);
      this.service.getCommentsOnArticle(this.articleId).then(response => this.comments = response);
    });
  }

  postComment(): void {
    alert('dddadada');
    console.log(this.comment);
    this.service.postCommentOnArticle(this.articleId, this.comment);
  }
}
