import {Injectable} from '@angular/core';
import {LoginUser} from '../app/user';
import {Router} from '@angular/router';

@Injectable()
export class LoginServiceClient {
  url = 'https://ancient-dawn-00955.herokuapp.com';
    // 'http://localhost:8080'
    // 'https://ancient-dawn-00955.herokuapp.com';

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
}
