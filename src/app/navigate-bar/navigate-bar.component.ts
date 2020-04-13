import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.css']
})

export class NavigateBarComponent implements OnInit {
  @Input()
  isCollapsed = true;
  isLoggedIn = false;
  user: {};
  constructor(private route: ActivatedRoute) {
    this.isCollapsed = true;
    this.user = sessionStorage.getItem('loggedInUser');
    console.log(this.user);
    if (this.user != null){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }
  }
  searchWord = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.isCollapsed = true;
    });
  }

  clicked(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logoutUser(){
    this.isLoggedIn = false;
    sessionStorage.removeItem('loggedInUser');
    console.log(this.user);
  }
}
