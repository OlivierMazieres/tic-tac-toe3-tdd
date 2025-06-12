class TicTacToe {
  constructor() {
    this.board = Array(3).fill().map(() => Array(3).fill(null));
    this.currentPlayer = 'X';
    this.winner = null;
    this.gameOver = false;
    this.movesCount = 0;
  }

  makeMove(row, col) {
    if (this.gameOver || row < 0 || row > 2 || col < 0 || col > 2 || this.board[row][col] !== null) {
      return false;
    }

    this.board[row][col] = this.currentPlayer;
    this.movesCount++;

    if (this.checkWin(row, col)) {
      this.winner = this.currentPlayer;
      this.gameOver = true;
    } else if (this.movesCount === 9) {
      this.gameOver = true;
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    return true;
  }

  checkWin(row, col) {
    // Check row
    if (this.board[row].every(cell => cell === this.currentPlayer)) {
      return true;
    }

    // Check column
    if (this.board.every(r => r[col] === this.currentPlayer)) {
      return true;
    }

    // Check diagonals
    if (row === col && this.board.every((r, i) => r[i] === this.currentPlayer)) {
      return true;
    }

    if (row + col === 2 && this.board.every((r, i) => r[2-i] === this.currentPlayer)) {
      return true;
    }

    return false;
  }

  getWinner() {
    return this.winner;
  }

  isGameOver() {
    return this.gameOver;
  }
}

module.exports = TicTacToe;
