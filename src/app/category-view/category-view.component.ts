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
  // tslint:disable-next-line:max-line-length
  // customArticles: [{'author': 'Karissa Bell', 'title': 'TikTok', 'description': 'TikTok has named the academics who…', 'url': 'https://www.engadget.com/2020/03/18/tiktok-content-advisory-council/', 'urlToImage': '', 'publishedAt': '2020-03-18T21:45:00Z', 'content': 'What', 'articleId': '1'}, {'author': 'Karissa Bell', 'title': 'TikTok', 'description': 'TikTok has named the academics who…', 'url': 'https://www.engadget.com/2020/03/18/tiktok-content-advisory-council/', 'urlToImage': '', 'publishedAt': '2020-03-18T21:45:00Z', 'content': 'What', 'articleId': '2'}, {'author': 'Karissa Bell', 'title': 'TikTok', 'description': 'TikTok has named the academics who…', 'url': 'https://www.engadget.com/2020/03/18/tiktok-content-advisory-council/', 'urlToImage': '', 'publishedAt': '2020-03-18T21:45:00Z', 'content': 'What', 'articleId': '3'}];
  customArticles = [];
  constructor(private route: ActivatedRoute) { }
  // write call to our backend to populate customArticles array using params.searchWord as tag.
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.headerText1 = 'Top Stories in ' + params.searchWord;
      this.headerText2 = params.searchWord + ' Stories by our Editors';
      fetch(`https://newsapi.org/v2/everything?q=${params.searchWord}&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
        .then(response => response.json())
        .then(results => {this.articles = results.articles; });
    });
    // tslint:disable-next-line:max-line-length
    this.customArticles = [{author: 'A', category: 'random', title: 'Random', description: 'Random description', url: '', urlToImage: '', publishedAt: '2020-03-18T21:45:00Z', content: 'What', id: '1'}, {author: 'B', category: 'random2', title: 'Random2', description: 'Random description2', url: '', urlToImage: '', publishedAt: '2020-03-18T21:44:00Z', content: 'What', id: '2'}];
  }

}
