import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simonsays',
  templateUrl: './simonsays.component.html',
  styleUrls: ['./simonsays.component.css']
})
export class SimonsaysComponent implements OnInit {

  colorName = ['Blue', 'Green', 'Yellow', 'Red'];
  colorText = ['blue', 'green', 'goldenrod', 'red'];
  possibilities = ['Blue', 'Green', 'Yellow', 'Red'];
  clickNumber = 0;
  currentGame = [];
  count = 0;
  player = [];
  message = 'start game';
  strict = false;


  // https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416
  // https://codepen.io/mrkaluzny/pen/pbVxxd

  constructor() { }

  ngOnInit() {
    this.newGame();

  }

  newGame() {
    this.clearGame();
  }

  clearGame() {
    this.currentGame = [];
    this.count = 0;
    this.addCount();
  }

  addCount() {
    this.count++;
    // add an animated fade out;
    this.generateMove();

  }

  addToPlayer(color) {
    let field = color;
    console.log('field ', field);
    this.player.push(field);
    console.log('this.player ', this.player);
    this.playerTurn(field);

  }

  playerTurn(field) {
    if (this.player[this.player.length - 1] !== this.currentGame[this.player.length - 1] ) {
      if (this.strict) {
        this.message = 'Try again from the beginning';
        this.newGame();
      } else {
        this.message = 'Wrong move try again';
        this.showMoves();
      }
    } else {
      this.message = "Good Move!";
      let check = this.player.length === this.currentGame.length;
      if (check) {
        if (this.count === 20) {
          this.message = 'You won! Congrats!';
        } else {
          this.message = 'Next round!';
          this.nextLevel();
        }
      }
    }
  }

  nextLevel() {
    this.addCount();
  }

  generateMove() {
    this.currentGame.push(this.possibilities[ Math.floor(Math.random() * 4) ]);
    console.log('this.currentGame ', this.currentGame);
    this.showMoves();
  }

  showMoves() {
    let i = 0;
    let moves = setInterval( () => {
      this.playGame(this.currentGame[i]);
      i++;
      if (i >= this.currentGame.length) {
        clearInterval(moves);
      }
    }, 600);
    this.clearPlayer();
  }

  onSound(name) {

  }

  playGame(field) {
    // add hover
    // add sound
    // display a field
    console.log('playGame field ', field);
  }

  onStrict() {
    if (this.strict === false) {
      this.strict = true;
    } else {
      this.strict = false;
    }
  }

  clearPlayer() {
    this.player = [];
  }

}
