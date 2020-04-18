import { Component, OnInit } from '@angular/core';
import {ExternalServiceClient} from '../../services/externalServiceClient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ExternalServiceClient) { }
  articles = [];
  userFirstName: '';
  favCategories = [];
  isLoggedIn: boolean;

  ngOnInit(): void {
    this.service.getNewsHeadlines().then(res => this.articles = res.articles);
    const user = localStorage.getItem('loggedInUser');
    this.isLoggedIn = !(user == null);
    if (this.isLoggedIn) {
      this.userFirstName = JSON.parse(user).firstName;
      this.favCategories = JSON.parse(user).categories;
    }
    // console.log('from home ' + user);
    // console.log(this.favCategories);
  }
}
