import {Injectable} from '@angular/core';
import {User} from '../app/user';
import {Router} from '@angular/router';

@Injectable()
export class UsersServiceClient {
  url = 'http://localhost:8080/';
    // 'https://thawing-shelf-72685.herokuapp.com/'

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

  getUserById = (userId: string) => {
    return fetch(this.url + `/api/user/` + userId, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }).then(res => res.json());
  }

  // deleteUser = (userId) => {
  //   return fetch(this.url + `/api/user/` + userId, {
  //     method: 'PUT',
  //     credentials: 'include',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*'
  //     },
  //     body: JSON.stringify(user),
  //   }).then(res => res.json());
  // }
}
