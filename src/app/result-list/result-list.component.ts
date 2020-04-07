import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  searchWord: '';
  @Input() articles = [];
  @Input() headerText: '';

  ngOnInit(): void {
    this.route.params.subscribe( params => this.searchWord = params.searchWord);
  }

}
