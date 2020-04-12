import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginUser, User} from '../app/user';
import {Article} from '../app/article';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class RegistrationServiceClient {
  url = 'http://localhost:8080/api/register';

  constructor(
    private http: HttpClient) {
  }

  addUser = (user: User) => {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => res.json());
  }
}
