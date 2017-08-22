import { Component, OnInit, ElementRef } from '@angular/core';
import * as _ from 'lodash';

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

  simonColors  = [];
  sequence = [];
  colors = [this.red, this.green, this.yellow, this.blue];
  step = 0;

  // https://www.youtube.com/watch?v=_r6B369ZTsc
  // https://stackoverflow.com/questions/29951293/using-lodash-to-compare-arrays-items-existence-without-order
  // https://medium.com/@urish/building-simon-with-angular2-iot-part-2-ee3a270747b5
  constructor() { }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    console.log('this.sequence.length ', this.sequence.length);
    if (this.sequence.length === 0) {
      console.log('Wait for a random color and press the correct color');
      this.randomSequence();
    } else {
      console.log('continue with playing the game');
    }
  }

  sendColor(color) {
    // see if the colour you have chosen matches the last item in the sequence array.
    this.simonColors.push(color);
    if (_.isEqual(this.simonColors.sort(), this.sequence.sort()) ) {
      console.log('the two arrays are equal ');
      console.log('this.simonColors ', this.simonColors);
      console.log('this.sequence ', this.sequence);
    } else {
      console.log('the two arrays are not equal');
      console.log('this.simonColors ', this.simonColors);
      console.log('this.sequence ', this.sequence);
    }


    // if (this.sequence.length) {
    //   // does color match the step we are on.
    //   if (color === this.sequence[this.step]) {
    //     // go to the next step.
    //     if (this.step === this.sequence.length - 1) {
    //       this.step = 0;
    //       console.log('sequence complete');
    //       this.randomSequence();
    //     }
    //   } else {
    //     this.step++;
    //   }
    // }
    // else {
    //   // lose condition
    //   alert('wrong color');
    //   this.sequence = [];
    //   this.step = 0;
    // }
    // console.log('new color ', color.id);
    // //this.simon1.push({color: color.id});
    // this.simon.push(color.id);
    // console.log('this.simon ', this.simon);
  }



  randomSequence() {
    // the first array is a sequence and the second array is the index.
    let randomStep = Math.floor(Math.random() * this.colors.length);
    this.step = randomStep;
    console.log('this.step ', this.step);
    let randomColor = this.colors[this.step];
    console.log('the random color is ', randomColor);
    this.sequence.push(randomColor);
    //console.log('this.sequence ', this.sequence);

  }





}
