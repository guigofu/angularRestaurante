import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  loadMenu(): Observable<Menu[]> {
    return timer(500)
      .pipe(
        map(() => {
          return [
            {
              chef: 'Dario Ch',
              date: new Date(),
              img: 'http://us.emedemujer.com/wp-content/uploads/sites/3/2017/07/plato-de-comida.jpg'
            },
            {
              chef: 'Fernando Ch',
              date: new Date(),
              img: 'https://www.lifeder.com/wp-content/uploads/2017/11/Comida-t%C3%ADpica-de-Antioquia-504x420.jpg'
            },
            {
              chef: 'Chamorro',
              date: new Date(),
              img: 'https://i.blogs.es/2a6e66/redalternativa-recetassanas-01/1366_2000.jpg'
            },
            {
              chef: 'Pepito',
              date: new Date(),
              img: 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg'
            },
            {
              chef: 'Juanita',
              date: new Date(),
              img: 'http://www.just-eat.es/blog/wp-content/uploads/2015/04/COMIDA-VEGETARIABNA.png'
            },
            {
              chef: 'Pepita',
              date: new Date(),
              img: 'https://www.restaurantes.com/blog/wp-content/uploads/2018/01/sushi-1050x600.jpg'
            }
          ];
        })
      );
  }
}

export class Menu {
  constructor(
    public img: string,
    public chef: string,
    public date: Date
  ) { }
}
