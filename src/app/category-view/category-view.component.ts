import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  headerText1: string;
  headerText2: string;
  articles: [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.headerText1 = 'Top Stories in ' + params.searchWord;
      this.headerText2 = params.searchWord + ' Stories by our Editors';
      fetch(`https://newsapi.org/v2/everything?q=${params.searchWord}&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
        .then(response => response.json())
        .then(results => {this.articles = results.articles; });
    });
  }

}
