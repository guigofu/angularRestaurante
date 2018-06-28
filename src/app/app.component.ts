import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';
import { finalize } from 'rxjs/operators';

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
  loading = false;

  constructor(service: MenuService) {
    this.loading = true;
    service.loadMenu()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(x => this.data = x, err => console.log(err));
  }

  showName(menu: Menu) {
    alert(menu.chef);
  }
}
