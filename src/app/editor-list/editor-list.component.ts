import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.css']
})
export class EditorListComponent implements OnInit {

  constructor() { }
  @Input() headerText: string;
  @Input() customArticles
  ngOnInit(): void {
    // console.log(this.customArticles);
    // console.log(this.headerText);
  }
}
