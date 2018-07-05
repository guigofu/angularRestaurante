import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from '../../services/menu.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  menu: Menu = new Menu('', '', new Date());

  constructor(
    public service: MenuService,
    public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
  }

  addMenu() {
    this.service.addMenu(this.menu);
    this.router.navigate(['']);
    // check routing, only allows adding one item...
    // this.router.navigate(['../'], { relativeTo: this.route });
  }

}
