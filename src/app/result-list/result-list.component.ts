import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  searchWord: '';
  @Input() articles = [];
  @Input() headerText: '';

  // searchNews = (searchWord) =>
  //   fetch(`http://newsapi.org/v2/everything?q=${searchWord}&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
  //     .then(response => response.json())
  //     .then(results => this.articles = results.articles)

  ngOnInit(): void {
    this.route.params.subscribe( params => this.searchWord = params.searchWord);
    // console.log(this.searchWord)
    // console.log('ngOnInit called');
    // // this.searchNews(this.searchWord);
    // console.log(this.articles);
  }

}
