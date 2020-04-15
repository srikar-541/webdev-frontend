import {Injectable} from '@angular/core';

@Injectable()
export class UsersServiceClient {
  url = 'http://localhost:8080';
    // 'https://ancient-dawn-00955.herokuapp.com';

  constructor() {
  }

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

  // updateUser = (userId,) => {
  //
  //   return fetch(this.url + '/api/user/' + userId, {
  //     method: 'PUT',
  //
  //   })
  // }
}
