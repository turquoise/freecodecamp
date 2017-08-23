import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simonsays',
  templateUrl: './simonsays.component.html',
  styleUrls: ['./simonsays.component.css']
})
export class SimonsaysComponent implements OnInit {

  colorName = ['Blue', 'Green', 'Yellow', 'Red'];
  clickNumber = 0;

  // https://medium.com/front-end-hacking/create-simon-game-in-javascript-

  constructor() { }

  ngOnInit() {
  }

}
