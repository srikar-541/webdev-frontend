import {Injectable} from '@angular/core';
import {LoginUser} from '../app/user';
import {Router} from '@angular/router';

@Injectable()
export class LoginServiceClient {
  url = 'http://localhost:8080/';
    // 'https://thawing-shelf-72685.herokuapp.com/'

  constructor(private route: Router) {
  }
  validate = (response: any) => {
    if (response.message){
      this.route.navigateByUrl('/login');
    }
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

  logout = () => {
    return fetch(this.url + `/api/logout`,{
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then();
  }
}
