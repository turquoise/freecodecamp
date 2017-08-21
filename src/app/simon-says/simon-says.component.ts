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

  simon  = [];
  sequence = [];
  colors = [this.red, this.green, this.yellow, this.blue];
  step = 0;

  // https://www.youtube.com/watch?v=_r6B369ZTsc

  constructor() { }

  ngOnInit() {
    this.nextSequence();
  }

  sendColor(color: HTMLDivElement) {
    this.sequence = [];
    if (!this.sequence.length) {
      // start a new game.
      this.nextSequence();
    }
    else if (this.sequence.length) {
      // does color match the step we are on.
      if (color === this.sequence[this.step]) {
        // go to the next step.
        if (this.step === this.sequence.length - 1) {
          this.step = 0;
          console.log('sequence complete');
          this.nextSequence();
        }
      } else {
        this.step++;
      }
    }
    else {
      // lose condition
      alert('wrong color');
      this.sequence = [];
      this.step = 0;
    }
    console.log('new color ', color.id);
    //this.simon1.push({color: color.id});
    this.simon.push(color.id);
    console.log('this.simon ', this.simon);
  }

  compareArrays() {

  }

  nextSequence() {
    // randomly generate colors
    // generate a number from 0 to 3.
    // the first array is a sequence and the second array is the index.
    let randomStep = Math.floor(Math.random() * this.colors.length);
    this.step = randomStep;
    console.log('this.step ', this.step);
    let nextColor = this.colors[this.step];
    console.log('the random color is ', nextColor);
    this.sequence.push(nextColor);
    //console.log('this.sequence ', this.sequence);

  }





}
