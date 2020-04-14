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
  isEditor: boolean;
  constructor(private route: ActivatedRoute) {
    this.isCollapsed = true;
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
    localStorage.removeItem('loggedInUser');
    location.reload();
  }
}
