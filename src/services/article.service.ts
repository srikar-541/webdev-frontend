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
    private http: HttpClient) {
  }

  addArticle(article: Article): Observable<Article> {
    console.log(article);
    return this.http.post<Article>(this.url, article, httpOptions);
  }
}
