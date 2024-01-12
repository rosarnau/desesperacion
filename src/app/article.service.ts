import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'; 
import { Article } from './article/article-item/article-item.component';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private articles: Article[];

  constructor() {

    this.articles=[
      {id:1, name:'Queso "Flor de Romero"', imageUrl: '../../../assets/images/flor_romero.jpg', price: 7, quantityInCart: 0, quantityInStock: 8, isInStock: true},
      {id:2, name:'Queso "Dehesa de los Llanos"', imageUrl: '../../../assets/images/dehesa_llanos.jpg', price: 13, quantityInCart: 0, quantityInStock: 5, isInStock: true},
      {id:3, name:'Queso "Portezuelo"', imageUrl: '../../../assets/images/portezuelo.jpg', price: 10, quantityInCart: 0, quantityInStock: 0, isInStock: false}
    ];
   }

   getArticles() : Observable<Article []>{
    return of(this.articles);
   }

   createArticles(article: Article):Observable<any>{
    this.articles.push(article);
    return of (true);
   }

   changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    const article = this.articles.find(a => a.id === articleID);

    if (article) {
      article.quantityInStock += changeInQuantity;
      return of(article);
    } else {
      return throwError(() => new Error('Article not found'));
    }
  }
}

