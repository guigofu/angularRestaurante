import { Component, OnInit } from '@angular/core';
import { Day, WeekService } from '../../services/week.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  week: Day[] = [];
  dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  constructor(service: WeekService) {

    service.loadWeek()
      .subscribe(x => this.week = x);
  }

  ngOnInit() {
  }

}
