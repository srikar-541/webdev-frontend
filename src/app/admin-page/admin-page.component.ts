import { Component, OnInit } from '@angular/core';
import {UsersServiceClient} from '../../services/users.service';
import * as $ from 'jquery';
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

  updateUserRole(id) {
    const gg = $('#role-fld').val();
    console.log('update role' + gg + id);
  }

  deleteUser(id) {
    console.log('delete' + id);
  }


}
