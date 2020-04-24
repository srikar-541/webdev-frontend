import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';
import {LoginServiceClient} from '../../services/login.service';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.css']
})

export class NavigateBarComponent implements OnInit {
  @Input()
  isCollapsed = true;
  isLoggedIn = false;
  isEditor: boolean;
  constructor(private route: ActivatedRoute, private router: Router,
              private service: LoginServiceClient) {
    this.isCollapsed = true;
    console.log(JSON.stringify(localStorage.getItem('loggedInUser')));
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    // console.log(user);
    if (user != null){
      this.isLoggedIn = true;
      this.isEditor = user.role === 'EDITOR';
    }
    else{
      this.isLoggedIn = false;
    }
  }
  searchWord = '';
  private user: User;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.isCollapsed = true;
      if (this.searchWord === null || this.searchWord === undefined){
        this.searchWord = '';
      }
    });
  }

  clicked(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logoutUser(){
    this.isLoggedIn = false;
    localStorage.removeItem('loggedInUser');
    this.service.logout();
    if (this.router.url === '/'){
      location.reload();
    }
    else{
      this.router.navigateByUrl('/');
    }
  }

  routeToProfile() {
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (this.user.role === 'ADMIN'){
      this.router.navigateByUrl('/admin');
    }else {
      this.router.navigateByUrl('/profile');
    }
  }
}
