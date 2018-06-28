import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../services/menu.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() menu: Menu;
  @Output() selected: EventEmitter<Menu> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.selected.emit(this.menu);
  }

}
