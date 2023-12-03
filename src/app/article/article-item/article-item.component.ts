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
  public isInStock: boolean;

  constructor() { }

  ngOnInit() {

    this.name = 'Habla';         
    this.imageUrl ='../../../assets/images/habla.jpg';
    this.price = 35;
    this.isOnSale = true;
    this.quantityInCart= 0;
    this.isInStock = true;
    }

    incrementQuantity() {
      if (this.isInStock) {
        this.quantityInCart++;
      }
    }
  
    decrementQuantity() {
      if (this.quantityInCart > 0) {
        this.quantityInCart--;
      }
    }
  
    isDecrementDisabled() {
      return this.quantityInCart === 0;
    }

  }

  

  
  

