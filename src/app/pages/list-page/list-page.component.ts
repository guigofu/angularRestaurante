import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from '../../services/menu.service';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {

  title = 'app';
  data: Menu[] = [];
  loading = false;

  // Al declarar un parámetro como público en el constructor, estos quedan como propiedades de la clase
  // es decir, los puedo acceder con this.property
  constructor(service: MenuService, public router: Router, public route: ActivatedRoute) {
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

  goToAdd() {
    this.router.navigate(['agregar'], { relativeTo: this.route });

  }

}
