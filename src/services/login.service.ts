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
  url = 'https://ancient-dawn-00955.herokuapp.com';

  constructor() {
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
