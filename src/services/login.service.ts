import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginUser, User} from '../app/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class LoginServiceClient {
  url = 'http://localhost:8080/api/login';

  constructor(
    private http: HttpClient) {
  }

  login = (loginUser: LoginUser) => {
    return fetch(this.url, {
          method: 'POST',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginUser)
        }).then(res => res.json());
  }
}
