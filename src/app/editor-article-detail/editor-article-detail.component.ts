import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../article';
import {ArticleServiceClient} from '../../services/article.service';
import {User} from '../user';
import {stringify} from 'querystring';
import {formatDate} from '@angular/common';

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
  likeCount: number;
  userid: number;
  likedUsers: [];
  isAlreadyLiked: boolean;
  hideLikes: boolean;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userobj = JSON.parse(localStorage.getItem('loggedInUser'));
      if (userobj !== null){
        this.userid = userobj.id;
        this.hideLikes = false;
      }
      else{
        this.hideLikes = true;
      }
      this.articleId = params.articleId;
      this.category = params.categoryName;

      this.service.getArticleById(this.articleId).then(res => {this.article = res; });
      this.service.getCommentsOnArticle(this.articleId).then(response => this.comments = response);
      this.service.getLikedUsers(this.articleId).then(res => {
        this.likeCount = res.length;
        this.likedUsers = res;
        let u: User
        for (u of this.likedUsers){
          console.log(u.id);
          if (this.userid === u.id){
            this.isAlreadyLiked = true;
          }
        }
      });
    });
  }

  likeClicked(){
    this.service.likeArticle(this.articleId).then(res => {
      console.log('first call' + res.id)
      this.service.getLikedUsers(res.id).then(r => {
        this.likeCount = r.length;
        this.likedUsers = r;
        let u: User
        for (u of this.likedUsers){
          console.log(u.id);
          if (this.userid === u.id){
            this.isAlreadyLiked = true;
          }
        }
      });
    });
  }

  postComment(): void {
    this.service.postCommentOnArticle(this.articleId, this.comment,
      formatDate(new Date(), 'yyyy/MM/dd', 'en')).then(response =>
    {
      this.service.validate(response);
      console.log(response);
      this.comment = '';
      this.service.getCommentsOnArticle(this.articleId).then(res => this.comments = res);
    });
  }

  deleteComment(commentId): void {
    this.service.deleteComment(this.articleId, commentId).then(response =>
    {
      console.log(response);
      this.service.getCommentsOnArticle(this.articleId).then(res => this.comments = res);
    });
  }
}
