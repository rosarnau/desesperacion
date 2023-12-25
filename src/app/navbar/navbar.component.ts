import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() navigateToArticleNewTemplate = new EventEmitter<string>();


  showArticleNewTemplate() {
    this.navigateToArticleNewTemplate .emit('article-new-template');  }

}


