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
  url = 'https://ancient-dawn-00955.herokuapp.com';

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
  // tslint:disable-next-line:max-line-length
  getArticlesByUser = (userId) => fetch(this.url + `/api/user/` + userId + `/articles/` , {credentials: 'include'}).then(response => response.json());
  getArticlesByCategory = (category) => fetch(this.url + `/api/articles/category/` + category,
    {credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  getArticleById = (articleId) => fetch(this.url + `/api/article/` + articleId,{credentials: 'include'}).then(response => response.json());
  editArticle(article: Article): Observable<Article> {
    // console.log(article);
    return this.http.put<Article>(this.url, article, httpOptions);
  }
  deleteArticle = (article: Article) => fetch(this.url + `/api/article/` + article.id,
    {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
}
