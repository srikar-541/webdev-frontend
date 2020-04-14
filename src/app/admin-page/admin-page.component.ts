import { Component, OnInit } from '@angular/core';
import {UsersServiceClient} from '../../services/users.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service: UsersServiceClient) { }
  users: [];
  ngOnInit(): void {
    this.service.getAllUsers().then(response => this.users = response );
  }

  updateUserRole(id: any) {
    
  }

  deleteUser(id: any) {
    
  }
}
