import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  // gameboard = [
  //   "sq1", "sq2", "sq3",
  //   "sq4", "sq5", "sq6",
  //   "sq7", "sq8", "sq9"
  // ];

  gameboard = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  gameboard2 = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  game = [];
  square;
  sqx = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  sqo = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  squareSelected;
  hidegameboard = false;
  player = 1;
  random = Math.floor(Math.random() * 9) + 1;
  rand = Math.floor(Math.random() * 9);
  tag = ".sq" + this.rand.toString();
  gamewon = false;
  reload = false;
  gamewonPlayer = false;
  gamewonComputer = false;

  constructor() { }

  // https://www.youtube.com/watch?v=7YySrAQF_Jg

  ngOnInit() {
    //this.startGame();
    //this.randomSquare(this.rand);

  }

  onReload() {
    this.gamewon = false;
  }

  onClick(square) {
    console.log('clicked on ', square);
    let num = parseInt(square);
    if ( _.includes(this.gameboard2[num], 'x') || _.includes(this.gameboard2[num], 'o') ) {
      console.log('This square has been selected.');
    } else {
      if (this.player === 1) {
        //this.gameboard[num] = 'sq' + num.toString() + 'x';
        this.gameboard2[num] = 'x';
        //console.log('you have selected ', this.gameboard2[num]);
        console.log('this.gameboard2 ', this.gameboard2 );
        this.sqx[num] = 'sqx' + num;
        console.log('this.sqx ', this.sqx);


        if (this.didIWin('x')) {
          console.log('I won');
          this.gamewonPlayer = true;
          this.gamewon = true;
          this.reload = true;
        } else {
          //console.log('I did not win yet');
          console.log('player 2 turn this.gameboard ', this.gameboard2);
          this.player = 2;
          this.randomSquare();
        }
      }

    }

  }



  didIWin(symbol) {
    if ( _.includes(this.gameboard2[0], symbol) && _.includes(this.gameboard2[1], symbol) && _.includes(this.gameboard2[2], symbol)) {
      //console.log('sq1, sq2 and sq3 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard2[3], symbol) && _.includes(this.gameboard2[4], symbol) && _.includes(this.gameboard2[5], symbol)){
      //console.log('sq4, sq5 and sq6 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard2[6], symbol) && _.includes(this.gameboard2[7], symbol) && _.includes(this.gameboard2[8], symbol)  ) {
      //console.log('sq7, sq8 and sq9 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard2[0], symbol) && _.includes(this.gameboard2[3], symbol) && _.includes(this.gameboard2[6], symbol)  )   {
      //console.log('sq1, sq4 and sq7 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard2[1], symbol) && _.includes(this.gameboard2[4], symbol) && _.includes(this.gameboard2[7], symbol) ) {
      //console.log('sq2, sq5 and sq8 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard2[2], symbol) && _.includes(this.gameboard2[5], symbol) && _.includes(this.gameboard2[8], symbol) ) {
      //console.log('sq3, sq6 and sq9 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard2[0], symbol) && _.includes(this.gameboard2[4], symbol) && _.includes(this.gameboard2[8], symbol) ) {
      //console.log('sq1, sq5 and sq9 all have a symbol');
      return true;
    } else if ( _.includes(this.gameboard2[2], symbol) && _.includes(this.gameboard2[4], symbol) && _.includes(this.gameboard2[6], symbol)  ) {
      //console.log('sq3, sq5 and sq7 all have a symbol');
      return true;
    } else {
      //console.log('does not include symbol');
      return false;
    }

  }

  randomSquare() {
    let rand = Math.floor(Math.random() * 9) + 1;

    for (let i = 0; i < this.gameboard2.length + 1; i++) {
      if ( _.includes(this.gameboard2[i], "") ) {

        this.gameboard2[rand] = 'o';
        console.log('randomsquare this.gameboard2 ', this.gameboard2);
        //this.gameboard[rand] = 'sq' + rand.toString() + 'o';
        //console.log('this.gameboard ', this.gameboard);
        this.sqo[rand] = 'sqo' + rand;
        console.log('this.sqo ', this.sqo);

      }
      if (this.didIWin('o')) {
        console.log('Computer won');
        this.gamewonComputer = true;
        this.gamewon = true;
        this.reload = true;
      } else {
        //console.log('I did not win yet');
        //console.log('player 2 turn this.gameboard ', this.gameboard2);
        this.player = 1;
      }

    }


  }


  }
