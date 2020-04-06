import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  searchWord = '';
  articles = [];
  isCollapsed = true;

  searchNews = (searchWord) =>
    fetch(`http://newsapi.org/v2/everything?q=${searchWord}&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
      .then(response => response.json())
      .then(results => {this.articles = results.articles; this.isCollapsed = true; })
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.isCollapsed = true;
      this.searchWord = params.searchWord;
      this.searchNews(this.searchWord);
    });
  }
  }


