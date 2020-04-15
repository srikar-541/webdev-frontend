import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleServiceClient} from '../../services/article.service';
import {Article} from '../article';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ArticleServiceClient) { }
  user: any;
  pwd: '';
  pwd2: '';
  phoneNew: '';
  emailNew: '';
  isCurrentProfile: boolean;
  profileId: '';
  articles: Article[];
// tslint:disable-next-line:max-line-length
// {"id":161,"username":"admin","firstName":"admin","lastName":"admin","password":"admin","phoneNumber":"1234565432","email":"admin","role":"ADMIN","dateOfBirth":null,"categories":[],"createdArticles":[]}
  ngOnInit(): void {
    this.route.params.subscribe(params => this.profileId = params.profileId );
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (this.profileId) {
      this.isCurrentProfile = false;
    } else {this.isCurrentProfile = true; }
    if (this.isCurrentProfile) {
      this.service.getArticlesByUser(this.user.id).then(res => { this.service.validate(res);
                                                                 this.articles = res;

       });
    }
  }
  updateProfile() {
  }

  deleteArticle(articleId) {
    this.service.deleteArticle(articleId).
    then(response => this.service.getArticlesByUser(this.user.id)).
    then(res => this.articles = res);
  }
}
