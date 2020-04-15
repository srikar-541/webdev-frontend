import {Injectable} from '@angular/core';
import {User} from '../app/user';
import {Router} from '@angular/router';

@Injectable()
export class UsersServiceClient {
  url = 'https://ancient-dawn-00955.herokuapp.com';

  constructor(private route: Router) {
  }
  validate = (response: any) => {
    if (response.message){
      this.route.navigateByUrl('/login');
    }
  };

  getAllUsers = () => {
    return fetch(this.url + `/api/users`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => res.json());
  }

  updateUserProfile = (user: User) => {
    return fetch(this.url + `/api/user/` + user.id, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(user),
    }).then(res => res.json());
  }
}
