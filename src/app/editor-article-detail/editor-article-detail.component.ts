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
<<<<<<< HEAD
  comment: string;
  comments = [];
=======
  comment: '';
  likeCount: number;
  // call to backend to fetch the article.
>>>>>>> 5eec33f7fdef656a7caca0e4ea4a6651d6c1361a
  likeClicked(){
    alert('like clicked');
    this.service.likeArticle(this.articleId).then(res => console.log(res));
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = params.articleId;
      this.category = params.categoryName;
      this.service.getArticleById(this.articleId).then(res => this.article = res);
<<<<<<< HEAD
      this.service.getCommentsOnArticle(this.articleId).then(response => this.comments = response);
=======
      this.service.getLikedUsers(this.articleId).then(res => this.likeCount = res.length);
      console.log('likecount : ' + this.likeCount);
>>>>>>> 5eec33f7fdef656a7caca0e4ea4a6651d6c1361a
    });
  }

  postComment(): void {
    alert('dddadada');
    console.log(this.comment);
    this.service.postCommentOnArticle(this.articleId, this.comment);
  }
}
