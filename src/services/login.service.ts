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
  url = 'api/login';

  constructor(
    private http: HttpClient) {
  }

  login(loginUser: LoginUser): Observable<LoginUser> {
    console.log(loginUser);
    return this.http.post<User>(this.url, loginUser, httpOptions);
  }
}
