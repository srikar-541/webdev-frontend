import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class ExternalServiceClient {

  url = 'https://thawing-shelf-72685.herokuapp.com/';


  constructor(private route: Router) {
  }
  validate = (response: any) => {
    if (response.message){
      this.route.navigateByUrl('/login');
    }  }

  getNewsHeadlines = () =>
    fetch(`https://newsapi.org/v2/everything?q=top-headlines&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
      .then(response => response.json())
  searchNews = (searchWord) =>
    fetch(`https://newsapi.org/v2/everything?q=${searchWord}&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
      .then(response => response.json())
  getArticleDetail = (searchWord) =>
    fetch(`https://newsapi.org/v2/everything?q=` + searchWord + `&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
      .then(response => response.json())
  getExternalArticleByCategory = (searchWord) =>
    fetch(`https://newsapi.org/v2/everything?q=` + searchWord + `&sortBy=popularity&apiKey=3a0e82d1d0924dbe9fa7ead7f1e6a7ad`)
      .then(response => response.json())
}
