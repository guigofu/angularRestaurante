import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../services/menu.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() menu: Menu;

  constructor() { }

  ngOnInit() {
  }

}
