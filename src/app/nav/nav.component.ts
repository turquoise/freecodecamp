import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    //console.log($(window));
    $('.navbar-collapse ul li a').click(function(){
      $('.navbar-toggle:visible').click();
    });

  }

  onClick() {


  }



}
