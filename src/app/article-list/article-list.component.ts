import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../article/article-item/article-item.component';
import { share } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public articles$: Observable<Article[]>;
  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.articleService.getArticles()),
      share()
    );
  }

  search() {
    this.searchTerms.next(this.searchString);
  }

  }
  
  
