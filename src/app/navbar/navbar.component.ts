import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // http://valor-software.com/ngx-bootstrap/#/collapse

  public isCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log($(window));

  }
  public collapsed(event: any): void {
    console.log('collapsed event ', event);
  }

  public expanded(event: any): void {
    console.log('expanded event ', event);
  }

  onClick() {
    this.isCollapsed = !this.isCollapsed;
  }

}
