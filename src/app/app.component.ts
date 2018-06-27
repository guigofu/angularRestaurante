import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';

@Component({
  // Etiqueta para usar el componente
  selector: 'app-root',
  // Ruta de archivo template
  templateUrl: './app.component.html',
  // Ruta de los archivos de estilos
  styleUrls: ['./app.component.css'],
  // Servicios disponibles a partir de este nivel
  providers: [],
  // Template del componente (en caso de que sea muy corto)
  // template: '<p> Hola </p>'
})
export class AppComponent {
  title = 'app';
  data: Menu[] = [];

  constructor(service: MenuService) {
    service.loadMenu()
    .subscribe(x => this.data = x);
  }
}
