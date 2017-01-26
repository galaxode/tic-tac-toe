#!/usr/bin/env node

Game = function() {
  this.rounds = 9;
  this.answers = [];
};

// generate answer board
Game.prototype.initializeBoard = function() {
  answers = this.answers;
  for (var i = 1; i < 10; i++) {
    answers.push(i);
  }
};
Game.prototype.drawBoard = function() {
  answers = this.answers;
  var board =

` ${answers[0]} | ${answers[1]} | ${answers[2]}
-----------
 ${answers[3]} | ${answers[4]} | ${answers[5]}
-----------
 ${answers[6]} | ${answers[7]} | ${answers[8]}
`;

  console.log(board);
};

Game.prototype.startGame = function() {
  this.initializeBoard();
  this.drawBoard();
  var isPlayer1Turn = true;
  var player1 = {
    piece: 'x'
  };
  var player2 = {
    piece: 'o'
  };
  console.log('Player 1 is "x" and Player 2 is "o". When prompted, make your move by entering the grid number 1 through 9 and pressing enter.');
  while (this.rounds > 0) {
    if (isPlayer1Turn) {
      //var move = prompt('Player 1:');
    }
    this.rounds--;
  }
};

var newGame = new Game();
newGame.startGame();