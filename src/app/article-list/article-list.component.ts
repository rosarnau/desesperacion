import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../article/article-item/article-item.component';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public articles$: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
    this.articleService.getArticlesAsResponse()
    .subscribe((response) => {
      console.log('OBSERVE "response" RESPONSE is ', response);
    });
    this.articleService.getArticlesAsEvents()
    .subscribe((response) => {
      console.log('OBSERVE "events" RESPONSE is ', response);
    });

this.articleService.getArticlesAsString()
    .subscribe((response) => {
      console.log('Response Type "text" RESPONSE is ', response);
    });

this.articleService.getArticlesAsBlob()
    .subscribe((response) => {
      console.log('Response Type "blob" RESPONSE is ', response);
    });
}

  

  onQuantityChange(change: { id: number, quantity: number }) {
   
  }

  incrementQuantity(article: Article) {
    if (article.quantityInStock > 0) {
      article.quantityInCart++;
      article.quantityInStock--;
      this.onQuantityChange({ id: article.id, quantity: article.quantityInCart });
    }
  }

  decrementQuantity(article: Article) {
    if (article.quantityInCart > 0) {
      article.quantityInCart--;
      article.quantityInStock++;
      this.onQuantityChange({ id: article.id, quantity: article.quantityInCart });
    }
  }
}


  