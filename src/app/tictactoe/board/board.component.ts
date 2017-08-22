import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares = Array(9).fill(null);
  player = 'X';
  winner = null;

  constructor() { }

  ngOnInit() {
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.player = 'X';
    this.winner = null;
  }

  get status() {
    return this.winner ? `Winner: ${this.winner}` : `Player: ${this.player}`;
  }

  winningMove(): boolean {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8], // rows
      [0,3,6], [1,4,7], [2,5,8], // columns
      [0,4,8], [2,4,6] // diagonal
    ];
    for (let line of lines) {
      if (this.squares[line[0]]
        && this.squares[line[0]] === this.squares[line[1]]
        && this.squares[line[1]] ===  this.squares[line[2]]) {
          return true;
        }
    }
    return false;
  }

  makeMove(position) {
    //console.log('position ', position);
    if (!this.winner && !this.squares[position]) {
      this.squares[position] = this.player;
      if (this.winningMove()) {
        this.winner = this.player;
      }
      this.player = this.player === 'X' ? 'O' : 'X';
    }

  }

}
