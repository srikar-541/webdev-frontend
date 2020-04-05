import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-list-view',
  templateUrl: './article-list-view.component.html',
  styleUrls: ['./article-list-view.component.css']
})
export class ArticleListViewComponent implements OnInit {

  constructor() { }
  @Input() searchWord: string;
  articles = [];
  searchNews = () =>
    fetch(`http://newsapi.org/v2/everything?q=${this.searchWord}&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
      .then(response => response.json())
      .then(results => this.articles = results.articles)

  ngOnInit(): void {
    this.searchNews();
  }

}
