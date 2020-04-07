import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.css']
})
export class EditorListComponent implements OnInit {

  constructor() { }
  @Input() headerText: string;
  @Input() customArticles: Article[]
  ngOnInit(): void {

  }
}
