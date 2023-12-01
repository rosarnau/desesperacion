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

  constructor() { }

  ngOnInit() {

    this.name = 'Test Stock Company';         
    this.imageUrl = 'TSC';
    this.price = 135;
    this.isOnSale = true;
    this.quantityInCart= 0;
  }

}
