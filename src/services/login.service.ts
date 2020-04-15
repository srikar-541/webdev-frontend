import {Injectable} from '@angular/core';
import {LoginUser} from '../app/user';

@Injectable()
export class LoginServiceClient {
  url = 'http://localhost:8080';
    // 'https://ancient-dawn-00955.herokuapp.com';

  constructor() {
  }

  login = (loginUser: LoginUser) => {
    return fetch(this.url + `/api/login`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(loginUser)
        }).then(res => res.json());
  }
}
