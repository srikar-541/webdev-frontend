import { Component, OnInit } from '@angular/core';
import {ExternalServiceClient} from '../../services/externalServiceClient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ExternalServiceClient) { }
  articles = [];

  ngOnInit(): void {
    this.service.getNewsHeadlines().then(res => this.articles = res.articles);
  }
}
