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


