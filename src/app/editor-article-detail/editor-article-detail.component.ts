import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../article';
import {ArticleServiceClient} from '../../services/article.service';

@Component({
  selector: 'app-editor-article-detail',
  templateUrl: './editor-article-detail.component.html',
  styleUrls: ['./editor-article-detail.component.css']
})
export class EditorArticleDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: ArticleServiceClient) { }
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
<<<<<<< HEAD
=======
      this.article = {author: 'A', category: 'random', title: 'Random',
        description: 'Random description', url: '',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/QjuZKXnkLQgsYsL98uhL9X.jpg',
        publishedAt: '2020-03-18T21:45:00Z', content: 'What', id: 1};
      this.category = params.categoryName;
>>>>>>> 8d90f5c101c2678e271ddab0348712aee1026605
      this.articleId = params.articleId;
      this.category = params.categoryName;
      this.service.getArticleById(this.articleId).then(res => this.article = res);
      // this.article = {author: 'A', category: 'random', title: 'Random', description: 'Random description', url: '', urlToImage: 'https://cdn.mos.cms.futurecdn.net/QjuZKXnkLQgsYsL98uhL9X.jpg', publishedAt: '2020-03-18T21:45:00Z', content: 'What', id: 1};
    });
  }

}
