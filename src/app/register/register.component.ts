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
  password: string;
  userRole: string;
  firstName: string;
  lastName: string;
  dob: string;

  register(){
    this.router.navigate(['/login']);
    const user: User = {
      username: this.username,
    phoneNumber: this.phoneNumber,
    email: this.email,
    password: this.password,
    role: this.userRole,
    firstName: this.firstName,
    lastName: this.lastName,
      dob: this.dob
    };
    this.registrationService.addUser(user);
  }
  constructor(private router: Router,
              private registrationService: RegistrationServiceClient) { }

  ngOnInit(): void {
  }
}
