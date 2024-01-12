import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'La quesería';
  currentComponent: string = 'article-list';

  constructor(public messageService:MessageService){}

  onShowedComponent(event: {content: string}) {
    this.currentComponent = event.content;
  }
  ngOnInit():void{
    this.messageService.message$=of('¡Artículo creado!');
    
  }
}


