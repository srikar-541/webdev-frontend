import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleServiceClient} from '../../services/article.service';
import {Article} from '../article';
import {UsersServiceClient} from '../../services/users.service';
import {User} from '../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private articleServiceClient: ArticleServiceClient,
              private usersServiceClient: UsersServiceClient) { }
  user: User;
  pwd: string;
  pwd2: string;
  phoneNew: number;
  emailNew: string;
  isCurrentProfile: boolean;
  profileId: '';
  articles: Article[];

  ngOnInit(): void {
    this.route.params.subscribe(params => this.profileId = params.profileId );
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (this.profileId) {
      this.isCurrentProfile = false;
    } else {this.isCurrentProfile = true; }
    if (this.isCurrentProfile) {
      this.articleServiceClient.getArticlesByUser(this.user.id).then(res => {
        this.articleServiceClient.validate(res);
        this.articles = res;
       });
    } else {
      this.usersServiceClient.getUserById(this.profileId).then(res => {
        this.articleServiceClient.validate(res);
        this.user = res;
      });
      this.articleServiceClient.getArticlesByUser(this.profileId).then(res => {
        this.articleServiceClient.validate(res);
        this.articles = res;
      });
    }
  }
  updateProfile() {
    console.log(this.pwd);
    console.log(this.pwd2);
    console.log(this.phoneNew);
    console.log(this.emailNew);
    if (this.pwd !== this.pwd2) {
      alert('passwords dont match');
      return;
    }
    if (this.emailNew === '' && this.pwd === '' && this.phoneNew === undefined) {
      alert('please enter something to update');
      return;
    }
    if (this.pwd2 === '' || this.pwd2 === undefined) {
      this.pwd = this.user.password;
      this.pwd2 = this.user.password;
    }
    if (this.phoneNew === undefined) {
      this.phoneNew = this.user.phoneNumber;
    }
    if (this.emailNew === undefined || this.emailNew === '') {
      this.emailNew = this.user.email;
    }
    const updatedUser: User = {
      id: this.user.id,
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      phoneNumber: this.phoneNew,
      email: this.emailNew,
      password: this.pwd,
      role: this.user.role,
      categories: this.user.categories,
      dateOfBirth: this.user.dateOfBirth
    };

    this.usersServiceClient.updateUserProfile(updatedUser)
      .then(response => {
        console.log('update res : ' + response);
        if(response.status == 200){
          localStorage.setItem('loggedInUser', JSON.stringify(response));
        }
      });
  }

  deleteArticle(articleId) {
    this.articleServiceClient.deleteArticle(articleId).
    then(response => this.articleServiceClient.getArticlesByUser(this.user.id)).
    then(res => this.articles
     = res);
  }

  addCourse() {
    console.log('dd');
  }
}
