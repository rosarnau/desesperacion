import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  opcioArticleList:boolean =true;
  opcioFormTemplate:boolean=false;
  opcioFormReactive:boolean=false;
  
  mostraArticleList(){
    this.opcioArticleList=true;
    this.opcioFormTemplate=false;
    this.opcioFormReactive=false;
  }
  mostraFormTemplate(){
    this.opcioArticleList=false;
    this.opcioFormTemplate=true;
    this.opcioFormReactive=false;
  }
  mostraFormReactive(){
    this.opcioArticleList=false;
    this.opcioFormTemplate=false;
    this.opcioFormReactive=true;
  }
}