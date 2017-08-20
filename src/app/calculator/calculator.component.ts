import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  box = '';
  result;

  constructor() { }

  ngOnInit() {
  }

  toScreen(x) {
    this.box += x;
    if (x === 'c') {
      this.box = '';
    }
  }

  backspace() {
    let num = this.box;
    let len = num.length - 1;
    let newNum = num.substring(0,len);
    this.box = newNum;
  }

  power() {
    let x;
    x = this.box;
    x = x * x;
    this.box = x;
  }

  answer() {
    // eval(string)
    this.result = eval(this.box);
    console.log('this.result ', this.result);
    this.box = this.result;
  }


}
