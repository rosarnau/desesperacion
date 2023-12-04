import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit {
  
  public name: string;                        
  public imageUrl: string;
  public price: number;
  public isOnSale: boolean;
  public quantityInCart: number;
  public quantityInStock:number;
  public cart:boolean;
  public isInStock: boolean;
  public priceClass: string;

  constructor() { }

  ngOnInit() {

    this.name = 'Habla';         
    this.imageUrl ='../../../assets/images/habla.jpg';
    this.price = 30;
    this.isOnSale = true;
    this.quantityInCart= 0;
    this.quantityInStock=4;
    this.isInStock = this.quantityInStock>0;
    this.priceClass='available-price';

    }

    toggleFavorite() {
      this.cart = !this.cart;
      this.updatePriceClass(); 
    }

    updatePriceClass() {
      this.priceClass = this.isInStock ? 'available-price' : 'unavailable-price';
    }

    incrementQuantity() {
      if (this.isInStock) {
        this.quantityInCart++;
        this.quantityInStock--;
        this.isInStock = this.quantityInStock > 0;
        this.updatePriceClass();
      }
    }
  
    decrementQuantity() {
      if (this.quantityInCart > 0) {
        this.quantityInCart--;
        this.quantityInStock++;
        this.isInStock = this.quantityInStock > 0;
        this.updatePriceClass();
      }
    }
  
    isDecrementDisabled() {
      return this.quantityInCart === 0;
    }

  }

  

  
  

