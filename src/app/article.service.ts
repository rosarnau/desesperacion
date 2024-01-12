import { Injectable } from '@angular/core';
import { Article } from '../app/article/article-item/article-item.component';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private articles: Article[];

  constructor() {

    this.articles=[
      new Article ('Queso "Flor de Romero"', imageUrl:'../../../assets/images/flor_romero.jpg', price: 7, quantityInCart: 0, quantityInStock: 8, isInStock: true),
      new Article ('Queso "Dehesa de los Llanos"', imageUrl: '../../../assets/images/dehesa_llanos.jpg', price: 13, quantityInCart: 0, quantityInStock: 5, isInStock: true),
      new Article ('Queso "Portezuelo"', imageUrl: '../../../assets/images/portezuelo.jpg', price: 10, quantityInCart: 0, quantityInStock: 0, isInStock: false )
    ];
   }

   getArticles() : Article []{
    return this.articles;
   }

   createArticles(article: Article){
    this.articles.push(article);
    return true;
   }

   changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    const articleToUpdate = this.articles.find((article) => article.id === articleID);

    if (articleToUpdate) {
      articleToUpdate.quantity += changeInQuantity;
      return of(articleToUpdate);
    }
}
}
