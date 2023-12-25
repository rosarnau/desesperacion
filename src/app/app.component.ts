import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'La quesería';

  handleMenuItemSelected(menuItem: string) {
    if (menuItem === 'Nuevo artículo template') {
      console.log('Abriendo la plantilla para un nuevo artículo...');
      // Agrega lógica específica para "Nuevo artículo template"
    } else if (menuItem === 'Nuevo artículo reactivo') {
      console.log('Abriendo la plantilla para un nuevo artículo reactivo...');
      // Agrega lógica específica para "Nuevo artículo reactivo"
    } else {
      // Lógica para otras opciones del menú
    }
  }
}
