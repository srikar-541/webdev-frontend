import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
              private usersServiceClient: UsersServiceClient,
              private router: Router) { }
  user: User;
  pwd: string;
  pwd2: string;
  phoneNew: number;
  emailNew: string;
  isCurrentProfile: boolean;
  profileId: '';
  articles: Article[];
  categories: [];
  isSuccess: boolean;
  isFailure: boolean;
  isEditor: boolean;
  showError: boolean;
  errorMessage: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.profileId = params.profileId );
    if(this.profileId === undefined){
      this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    }
    else{
      this.usersServiceClient.getUserById(this.profileId).then(res => {
        this.user = res;
        this.isEditor = this.user.role === 'EDITOR';
      });
    }
    this.showError = false;
    this.isCurrentProfile = !this.profileId;
    if (this.isCurrentProfile) {
      this.articleServiceClient.getArticlesByUser(this.user.id).then(res => {
        this.articles = res;
       });
    } else {
      this.usersServiceClient.getUserById(this.profileId).then(res => {
        this.user = res;
        this.articles = res.createdArticles;
      });
      // this.articleServiceClient.getArticlesByUser(this.profileId).then(res => {
      //   this.articles = res;
      // });
    }
  }
  updateProfile() {
    this.showError = false;
    if (this.pwd !== undefined && this.pwd2 !== undefined && this.pwd !== this.pwd2) {
      this.showErrorAlert('passwords dont match');
      return;
    }
    if ((this.emailNew === '' || this.emailNew === undefined)  &&
      (this.pwd === '' || this.pwd === undefined) &&
      (this.phoneNew === undefined)) {
      this.showErrorAlert('please enter something to update');
      return;
    }
    if (this.pwd2 === '' || this.pwd2 === undefined) {
      this.pwd = this.user.password;
      this.pwd2 = this.user.password;
    }
    if (this.phoneNew === undefined) {
      this.phoneNew = this.user.phoneNumber;
    }
    if(this.phoneNew != null && isNaN(this.phoneNew) ){
      this.showErrorAlert('Invalid phone number');
      return;
    }
    if (this.emailNew === undefined || this.emailNew === '') {
      this.emailNew = this.user.email;
    }
    if (this.emailNew != null && (this.emailNew.indexOf('@') === -1
       || this.emailNew.indexOf('.') === -1 ||
      this.emailNew.indexOf('.') === this.emailNew.length - 1)){
      this.showErrorAlert('Invalid email id');
      return;
    }

    this.user.categories.forEach(a => delete a.id)

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

    console.log(JSON.stringify(updatedUser))

    this.usersServiceClient.updateUserProfile(updatedUser)
      .then(response => {
        console.log('update res : ' + JSON.stringify(response));
        if (response.id !== undefined){
          localStorage.setItem('loggedInUser', JSON.stringify(response));
          this.isSuccess = true;
        }
        else{
          this.isFailure = true;
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

  showErrorAlert(message){
    this.showError = true;
    this.errorMessage = message;
  }
}
