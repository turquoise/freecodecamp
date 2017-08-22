import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  gameboard = [
    "sq1", "sq2", "sq3",
    "sq4", "sq5", "sq6",
    "sq7", "sq8", "sq9"
  ];
  game = [];
  square;
  player = 1;
  random = Math.floor(Math.random() * 9) + 1;
  rand = Math.floor(Math.random() * 9);
  tag = ".sq" + this.rand.toString();
  gamewon = false;

  constructor() { }

  // https://www.youtube.com/watch?v=7YySrAQF_Jg

  // define variables
  // when I click on a square
    // check if it has been selected.
    // add class x based on player
      // check if I did win.
    // toggle player
    // have computer select random square.
      // did the computer win?

  ngOnInit() {
    this.startGame();
    this.randomSquare(this.rand);
    this.didIWin('x');

  }

  startGame() {

  }

  onClick(square) {
    console.log('clicked on ', square);
    let num = parseInt(square);
    if ( _.includes(this.gameboard[num], 'x') || _.includes(this.gameboard[num], 'o') ) {
      console.log('sorry the square is taken');
    } else {
      console.log('you have selected ', this.gameboard[num]);
    }
    //this.gameboard.splice(num, 0, 'sq' + num.toString() + 'x')
    //console.log('this.gameboard after', this.gameboard);
  }

  didIWin(symbol) {
    if ( _.includes(this.gameboard[0], symbol) && _.includes(this.gameboard[1], symbol) && _.includes(this.gameboard[2], symbol)) {
      console.log('sq1, sq2 and sq3 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard[3], symbol) && _.includes(this.gameboard[4], symbol) && _.includes(this.gameboard[5], symbol)){
      console.log('sq4, sq5 and sq6 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard[6], symbol) && _.includes(this.gameboard[7], symbol) && _.includes(this.gameboard[8], symbol)  ) {
      console.log('sq7, sq8 and sq9 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard[0], symbol) && _.includes(this.gameboard[3], symbol) && _.includes(this.gameboard[6], symbol)  )   {
      console.log('sq1, sq4 and sq7 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard[1], symbol) && _.includes(this.gameboard[4], symbol) && _.includes(this.gameboard[7], symbol) ) {
      console.log('sq2, sq5 and sq8 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard[2], symbol) && _.includes(this.gameboard[5], symbol) && _.includes(this.gameboard[8], symbol) ) {
      console.log('sq3, sq6 and sq9 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard[0], symbol) && _.includes(this.gameboard[4], symbol) && _.includes(this.gameboard[8], symbol) ) {
      console.log('sq1, sq5 and sq9 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard[2], symbol) && _.includes(this.gameboard[4], symbol) && _.includes(this.gameboard[6], symbol)  ) {
      console.log('sq3, sq5 and sq7 all have a symbol');
      return true;
    } else {
      console.log('does not include symbol');
      return false;
    }

  }

  randomSquare(randomNum) {
    console.log('rand ', randomNum);
    while (_.includes(this.gameboard, 'x') || _.includes(this.gameboard, 'o')) {
      // yes then do something
      this.gameboard.splice(randomNum, 0, 'sq' + randomNum.toString() + '0')
      console.log('this.gameboard after', this.gameboard);
    }
    //this.gameboard.splice(randomNum, 0, '.sq' + randomNum.toString())
    //console.log('this.gameboard after', this.gameboard);
    console.log('this.gameboard[0], [1] and [2]', this.gameboard[0], this.gameboard[1], this.gameboard[2]);
    return this.gameboard;

  }

}
