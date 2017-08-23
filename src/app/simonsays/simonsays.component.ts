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
  level = 1;
  activeB = false;
  activeY = false;
  activeR = false;
  activeG = false;


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
    console.log('this.count ', this.count);
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
          this.message = 'You have won!';
          this.level = 1;
        } else {
          this.message = 'Next round!';
          this.nextLevel();
        }
      }
    }
  }

  nextLevel() {
    if (this.count < 5 ) {
      this.level = 1;
      this.addCount();
    } else if (this.count > 5) {
      this.level = 2;
      this.addCount();
    }
  }

  generateMove() {
    let showColor = this.possibilities[ Math.floor(Math.random() * 4) ];
    this.currentGame.push(showColor);
    if (showColor === 'Red') {
      this.activeR = true;
    } else if (showColor === 'Blue') {
      this.activeB = true;
    } else if (showColor === 'Green') {
      this.activeG = true;
    } else if (showColor === 'Yellow') {
       this.activeY = true;
    }
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
    //this.clearPlayer();
  }

  onSound(name) {

  }

  playGame(field) {
    // add hover
    // add sound
    // display a field
    if (field === 'Red') {
      this.activeR = false;
    } else if (field === 'Blue') {
      this.activeB = false;
    } else if (field === 'Green') {
      this.activeG = false;
    } else if (field === 'Yellow') {
       this.activeY = false;
    }

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
