import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';

interface Article {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantityInCart: number;
  quantityInStock: number;
  isInStock: boolean;
}

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


  