import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-profile',
  templateUrl: './editor-profile.component.html',
  styleUrls: ['./editor-profile.component.css']
})
export class EditorProfileComponent implements OnInit {

  constructor() { }
  pwd = ''
  pwd2 = ''
  phoneOld = '999-999-9999'
  phoneNew = ''
  articles = [ {title: 'title1'}, {title: 'title2'}, {title: 'title3'}];
  updateProfile(){}
  deleteArticle(){}

  ngOnInit(): void {
  }

}
