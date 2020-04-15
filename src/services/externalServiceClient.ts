import {Injectable} from '@angular/core';


@Injectable()
export class ExternalServiceClient {
  url = 'http://localhost:8080';
    'https://ancient-dawn-00955.herokuapp.com';

  constructor() {
  }

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
