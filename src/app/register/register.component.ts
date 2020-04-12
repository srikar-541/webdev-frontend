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
  category: [];
  lastName: string;
  dob: string;

  register(){
    this.router.navigate(['/login']);
    const user: User = {
      id: 0,
      username: this.username,
    phoneNumber: this.phoneNumber,
    email: this.email,
    password: this.password,
    role: this.userRole,
    firstName: this.firstName,
    lastName: this.lastName,
      category: '',
      dob: this.dob
    };
    console.log(this.educationcbox, this.technologycbox, this.politicscbox, this.economycbox,
      this.sportscbox);
    this.registrationService.addUser(user);
  }
  constructor(private router: Router,
              private registrationService: RegistrationServiceClient) { }

  ngOnInit(): void {
  }
}
