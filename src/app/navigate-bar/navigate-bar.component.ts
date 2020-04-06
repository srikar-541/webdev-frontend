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
  constructor(private route: ActivatedRoute) {
    this.isCollapsed = true;
    alert('nav bar' + this.isCollapsed);
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
}
