import { Component } from '@angular/core';

@Component({
  // Etiqueta para usar el componente
  selector: 'app-root',
  // Ruta de archivo template
  // templateUrl: './app.component.html',
  // Ruta de los archivos de estilos
  // styleUrls: ['./app.component.css'],
  // Servicios disponibles a partir de este nivel
  providers: [],
  // Template del componente (en caso de que sea muy corto), recomendado hasta 3 líneas
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { }
