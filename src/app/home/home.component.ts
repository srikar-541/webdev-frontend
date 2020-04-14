import { Component, OnInit } from '@angular/core';
import {ExternalServiceClient} from '../../services/externalServiceClient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ExternalServiceClient) { }
  // searchWord = 'coronavirus'
  articles = [];
  // searchNews = () =>
  //   fetch(`https://newsapi.org/v2/everything?q=top-headlines&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
  //     .then(response => response.json())
  //     .then(results => this.articles = results.articles)

  ngOnInit(): void {
    // this.searchNews();
    this.service.getNewsHeadlines().then(res => this.articles = res.articles);
  }
}
