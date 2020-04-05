import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  constructor() { }
  searchWord: 'google'

  public clickedEvent: string;
  childEventClicked(word: string){
    this.clickedEvent = word;
  }
  ngOnInit(): void {
  }

}
