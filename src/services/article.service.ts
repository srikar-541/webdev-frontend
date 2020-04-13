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
  url = 'http://localhost:8080';

  constructor(
    private http: HttpClient) {
  }

  addArticle = (article: Article) => fetch(this.url + `/api/article`,
    {method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    }).then(response => response.json())
  // tslint:disable-next-line:max-line-length
  getArticlesByEditor = (editor) => fetch(this.url + `/api/articles/author/` + editor, {credentials: 'include'}).then(response => response.json());
  getArticlesByCategory = (category) => fetch(this.url + `/articles/` + category).then(response => response.json());
  getArticleById = (articleId) => fetch(this.url + `/articles/` + articleId).then(response => response.json());
  editArticle(article: Article): Observable<Article> {
    console.log(article);
    return this.http.put<Article>(this.url, article, httpOptions);
  }
  deleteArticle(article: Article): Observable<Article> {
    console.log(article);
    return this.http.delete<Article>(this.url);
  }
}
