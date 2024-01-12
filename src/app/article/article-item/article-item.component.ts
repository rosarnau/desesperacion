import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface Article {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantityInCart: number;
  quantityInStock: number;
  isInStock: boolean;
}

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush //con la utilización de onPush para la estrategia de detección de cambios
                                                 //se optimiza el rendimiento
})
export class ArticleItemComponent {

//Propiedad de entrada que recibe un artículo como input, ejercicio 4

  @Input() article: Article; 
  @Output() quantityChange: EventEmitter<number> = new EventEmitter();


  // Método para actualizar, incrementar, decrementar la disponibilidad del artículo y emitir el evento de cambio de cantidad
  //este método se crea para el ejercicio 3 y se mantiene
  updateAvailability() {
    this.article.isInStock = this.article.quantityInStock > 0;
    this.quantityChange.emit(this.article.quantityInCart);
  }

  incrementQuantity() {
    if (this.article.quantityInStock > 0) {
      this.article.quantityInCart++;
      this.article.quantityInStock--;
      this.updateAvailability();
    }
  }

  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.article.quantityInStock++;
      this.updateAvailability();
    }
  }

  // Método que devuelve si el botón de decremento debería estar desactivado, ejercicio 3

  isDecrementDisabled() {
    return this.article.quantityInCart === 0;
  }

    // Propiedad que devuelve la clase CSS para el estilo del precio basado en la disponibilidad del artículo
    //Ejercicio 4
  get articleClass(): string {
    return this.article.isInStock ? 'available-item' : 'unavailable-item';
  }

  get priceClass(): string {
    return this.article.isInStock ? 'available-price' : 'unavailable-price';
  }
}


