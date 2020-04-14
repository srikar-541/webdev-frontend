import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleServiceClient} from '../../services/article.service';
import {ExternalServiceClient} from '../../services/externalServiceClient';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  headerText1: string;
  headerText2: string;
  articles: [];
  // tslint:disable-next-line:max-line-length
  customArticles = [];

  constructor(private route: ActivatedRoute,
              private service: ArticleServiceClient,
              private extService: ExternalServiceClient) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.headerText1 = 'Top Stories in ' + params.searchWord;
      this.headerText2 = params.searchWord + ' Stories by our Editors';
      this.extService.getExternalArticleByCategory(params.searchWord).then(results => {
            this.articles = results.articles;
          });
      this.service.getArticlesByCategory(params.searchWord).then(res => {
        this.customArticles = res;
      });
    });
  }
}
