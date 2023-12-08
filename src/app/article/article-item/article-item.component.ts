import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

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
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush //con la utilización de onPush para la estrategia de detección de cambios
                                                 //se optimiza el rendimiento
})
export class ArticleItemComponent {

  @Input() article: Article;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter();


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

  isDecrementDisabled() {
    return this.article.quantityInCart === 0;
  }

  get articleClass(): string {
    return this.article.isInStock ? 'available-item' : 'unavailable-item';
  }

  get priceClass(): string {
    return this.article.isInStock ? 'available-price' : 'unavailable-price';
  }
}


