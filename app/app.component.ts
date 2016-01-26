import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Article} from './article';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';

@Component({
    selector: 'articles',
    templateUrl: 'app/app.component.html',
    providers: [ArticleService],
    directives: [ArticleComponent]
})

export class AppComponent implements OnInit {
    articles: Article[];

    constructor(
        private _articleService: ArticleService
    ){}

    getArticles(){
        this.articles = this._articleService.getArticles();
    }

    ngOnInit(){
        this.getArticles();
    }
}