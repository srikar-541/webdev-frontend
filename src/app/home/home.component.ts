import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // searchWord = 'coronavirus'
  articles = [];


  searchNews = () =>
    // fetch(`http://newsapi.org/v2/everything?q=${this.searchWord}&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
    //   .then(response => response.json())
    //   .then(results => this.articles = results.articles)
    fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
      .then(response => response.json())
      .then(results => this.articles = results.articles)

  ngOnInit(): void {
    this.searchNews();
  }

}
