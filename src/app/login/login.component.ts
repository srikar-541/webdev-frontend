import { Component, OnInit } from '@angular/core';
import {LoginServiceClient} from '../../services/login.service';
import {LoginUser} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServiceClient: LoginServiceClient) { }
  username: '';
  password: '';
  userObj = '';
  login() {
    const loginUser: LoginUser = {
      username: this.username,
      password: this.password
    };
    this.loginServiceClient.login(loginUser).then(res => this.userObj = res);
    console.log(this.userObj);
  }

  ngOnInit(): void {
  }
}
