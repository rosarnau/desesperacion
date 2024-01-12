import { Component, OnInit } from '@angular/core';
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
public articles: Article[];
constructor(private articleService: ArticleService){}

ngOnInit(){
  this.articleService.getArticles()
  .subscribe(articles=>{
    this.articles=articles
    });
  }

// Método que se ejecuta cuando cambia la cantidad de un artículo

  onQuantityChange(change: { id: number, quantity: number }) {
      // Encuentra el artículo correspondiente en la lista y realiza acciones varias

    const article = this.articles.find(a => a.id === change.id);
   
}
// Método para incrementar la cantidad de un artículo
  incrementQuantity(id: number) {
  const article = this.articles.find(a => a.id === id);

// Verifica si el artículo existe y si hay stock disponible
  if (article && article.quantityInStock > 0) {

// Incrementa la cantidad en el carrito y reduce la cantidad en stock
    article.quantityInCart++;
    article.quantityInStock--;

// Llama al método de cambio de cantidad con la información actualizada
    this.onQuantityChange({ id: article.id, quantity: article.quantityInCart });
  }
}

decrementQuantity(id: number) {
  const article = this.articles.find(a => a.id === id);

  if (article && article.quantityInCart > 0) {
    article.quantityInCart--;
    article.quantityInStock++;
    this.onQuantityChange({ id: article.id, quantity: article.quantityInCart });
  }
}
}

  