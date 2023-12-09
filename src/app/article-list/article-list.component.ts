import { Component, OnInit } from '@angular/core';

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


// Array que contiene la lista de artículos, ejercicio 4 
  articles: Article[] = [
    { id: 1, name: 'Queso "Flor de Romero"', imageUrl:'../../../assets/images/flor_romero.jpg', price: 7, quantityInCart: 0, quantityInStock: 8, isInStock: true },
    { id: 2, name: 'Queso "Dehesa de los Llanos"', imageUrl: '../../../assets/images/dehesa_llanos.jpg', price: 13, quantityInCart: 0, quantityInStock: 5, isInStock: true },
    { id: 3, name: 'Queso "Portezuelo"', imageUrl: '../../../assets/images/portezuelo.jpg', price: 10, quantityInCart: 0, quantityInStock: 0, isInStock: false }
  ];

  constructor() { }

  ngOnInit() {
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

  