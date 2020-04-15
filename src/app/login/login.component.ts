import { Component, OnInit } from '@angular/core';
import {LoginServiceClient} from '../../services/login.service';
import {LoginUser} from '../user';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginServiceClient: LoginServiceClient,
              private router: Router) { }
  username: '';
  password: '';
  userObj = '';
  authFailed = false;
  login() {
    const loginUser: LoginUser = {
      username: this.username,
      password: this.password
    };
    this.loginServiceClient.login(loginUser).then(res =>
    { if (res.email !== '' && res.email !== undefined) {
      this.userObj = res;
      localStorage.setItem('loggedInUser', JSON.stringify(this.userObj));
      // console.log(JSON.stringify(localStorage.getItem('loggedInUser')));
      this.router.navigateByUrl('/');
    }
    else {
      this.authFailed = true;
    }
    });
  }

  ngOnInit(): void {
  }
}
