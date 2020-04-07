import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../app/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class RegistrationServiceClient {
  url = 'api/registration';

  constructor(
    private http: HttpClient) {
  }

  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.url, user, httpOptions);
  }
}
