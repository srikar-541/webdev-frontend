import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  searchWord = ''
  @Output() eventClicked = new EventEmitter<string>()
  onClick(word: string): void{
    this.eventClicked.emit(word);
  }

  ngOnInit(): void {
  }

}
