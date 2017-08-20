import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simon-says',
  templateUrl: './simon-says.component.html',
  styleUrls: ['./simon-says.component.css']
})
export class SimonSaysComponent implements OnInit {

  red = 'red';
  green = 'green';
  yellow = 'yellow';
  blue = 'blue';

  simon1  = [];

  // https://www.youtube.com/watch?v=_r6B369ZTsc

  constructor() { }

  ngOnInit() {
  }

  sendColor(color: HTMLDivElement) {
    console.log('new color ', color.id);
    this.simon1.push({color: color.id});
    console.log('this.simon1 ', this.simon1);

  }



}
