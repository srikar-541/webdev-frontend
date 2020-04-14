import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExternalServiceClient} from '../../services/externalServiceClient';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: ExternalServiceClient) { }
  searchWord = '';
  articles = [];
  isCollapsed = true;
  headerText: string;

  searchNews = (searchWord) =>
    // fetch(`https://newsapi.org/v2/everything?q=${searchWord}&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
    //   .then(response => response.json())
    //   .then(results => {this.articles = results.articles; this.isCollapsed = true; })
  this.service.searchNews(searchWord).then(results => {this.articles = results.articles; this.isCollapsed = true; });
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.isCollapsed = true;
      this.searchWord = params.searchWord;
      this.searchNews(this.searchWord);
      this.headerText = 'Top stories in ' + this.searchWord;
    });
  }
  }


