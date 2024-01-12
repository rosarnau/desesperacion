import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'La quesería';
  currentComponent: string = 'article-list';

  onShowedComponent(event: {content: string}) {
    this.currentComponent = event.content;
  }
  ngOnInit(){
    
  }
}


