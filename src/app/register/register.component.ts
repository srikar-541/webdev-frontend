import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationServiceClient} from '../../services/registration.service';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  phoneNumber: number;
  email: string;
  politicscbox: boolean;
  sportscbox: boolean;
  economycbox: boolean;
  technologycbox: boolean;
  educationcbox: boolean;
  password: string;
  userRole: string;
  firstName: string;
  categories = [];
  lastName: string;
  dob: string;

  register(){
    if (this.sportscbox) {
      this.categories.push({category: 'sports'});
    }
    if (this.politicscbox) {
      this.categories.push({category: 'politics'});
    }
    if (this.economycbox) {
      this.categories.push({category: 'finance'});
    }
    if (this.technologycbox) {
      this.categories.push({category: 'technology'});
    }
    if (this.educationcbox) {
      this.categories.push({category: 'education'});
    }
    const user: User = {
      id: 0,
      username: this.username,
    phoneNumber: this.phoneNumber,
    email: this.email,
    password: this.password,
    role: this.userRole,
    firstName: this.firstName,
    lastName: this.lastName,
      categories: this.categories,
      dob: this.dob
    };
    this.registrationService.addUser(user).then( res => {
      if (res.email !== '' && res.email !== undefined) {
        localStorage.setItem('loggedInUser', res);
        // console.log(JSON.stringify(localStorage.getItem('loggedInUser')));
        this.router.navigateByUrl('/login');
      }
    }
    );
  }
  constructor(private router: Router,
              private registrationService: RegistrationServiceClient) { }

  ngOnInit(): void {
  }
}
