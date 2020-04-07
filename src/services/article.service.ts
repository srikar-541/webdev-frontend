import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../app/article';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class ArticleServiceClient {
  url = 'api/articles';

  constructor(
    private https: HttpClient) {
  }

  addArticle(article: Article): Observable<Article> {
    console.log(article);
    return this.https.post<Article>(this.url, article, httpOptions);
  }

  getArticlesByEditor = (editor) => fetch(this.url + editor + `/articles/`).then(response => response.json());
  getArticlesByCategory = (category) => fetch(this.url + `/articles/` + category).then(response => response.json());
  getArticleById = (articleId) => fetch(this.url + `/articles/` + articleId).then(response => response.json());
  editArticle(article: Article): Observable<Article> {
    console.log(article);
    return this.https.put<Article>(this.url, article, httpOptions);
  }
  deleteArticle(article: Article): Observable<Article> {
    console.log(article);
    return this.https.delete<Article>(this.url);
  }
}
