import { Component, OnInit } from '@angular/core';
import {UsersServiceClient} from '../../services/users.service';
import * as $ from 'jquery';
import {User} from '../user';
import {stringify} from 'querystring';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service: UsersServiceClient) { }
  users: [];
  role: '';
  ngOnInit(): void {
    this.service.getAllUsers().then(response => this.users = response );
  }

  updateUserRole(user: User) {
    const newRole = $('#role-fld').val();
    console.log(typeof newRole);
    user.role = newRole.toString();
    this.service.updateUserProfile(user)
      .then(response => this.service.getAllUsers()
        .then(r => this.users = r));
    // console.log(user);
  }

  deleteUser(userId) {
  this.service.deleteUser(userId).then(res => this.service.getAllUsers().then(r => this.users = r)) }
}
