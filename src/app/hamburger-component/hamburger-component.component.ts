import { Component, OnInit } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hamburger-component',
  templateUrl: './hamburger-component.component.html',
  styleUrls: ['./hamburger-component.component.css']
})

export class HamburgerComponentComponent implements OnInit {
  isCollapsed: boolean;
  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit(): void {
  }
}
