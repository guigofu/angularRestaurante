import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeekService {

  constructor() { }

  loadWeek(): Observable<Day[]> {
    return timer(500)
    .pipe(
      map(x => [
        { chef: 'Dario Ch', menu: ['Cordon Blue', 'Steak pimienta', 'Chicharron' ]},
        { chef: 'Pepito', menu: ['Menu 2', 'Menu 3', 'Menu 4' ]},
        { chef: 'Juanita', menu: ['Menu 5', 'Menu 6']},
        { chef: 'Lupita', menu: ['Menu 7']},
        { chef: 'Fulanito', menu: ['Menu 8', 'Menu 9', 'Menu 10' ]},
      ])
    );
  }
}

export class Day {
  constructor(public chef: string, public menu: string[]) {

  }

}
