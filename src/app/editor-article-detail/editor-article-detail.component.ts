import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../article';

@Component({
  selector: 'app-editor-article-detail',
  templateUrl: './editor-article-detail.component.html',
  styleUrls: ['./editor-article-detail.component.css']
})
export class EditorArticleDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  article: Article;
  category: string;
  articleId: string;
  comment: '';
  // call to backend to fetch the article.
  likeClicked(){
    alert('like clicked');
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:max-line-length
      this.article = {author: 'A', category: 'random', title: 'Random', description: 'Random description', url: '', imageUrl: 'https://cdn.mos.cms.futurecdn.net/QjuZKXnkLQgsYsL98uhL9X.jpg', publishedAt: '2020-03-18T21:45:00Z', content: 'What', id: 1};
      this.category = params.categoryName;
      this.articleId = params.articleId;
    });
  }

}
