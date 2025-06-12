const TicTacToe = require('../src/TicTacToe');

describe('TicTacToe', () => {
  let game;
  
  beforeEach(() => {
    game = new TicTacToe();
  });
  
  it('X should be first player', () => {
    expect(game.currentPlayer).toBe('X');
  });
  
  it('should alternate players', () => {
    game.makeMove(0, 0);
    expect(game.currentPlayer).toBe('O');
    game.makeMove(1, 1);
    expect(game.currentPlayer).toBe('X');
  });
  
  it('should prevent invalid moves', () => {
    game.makeMove(0, 0);
    expect(game.makeMove(0, 0)).toBe(false);
  });
  
  it('should detect horizontal win', () => {
    game.makeMove(0, 0); // X
    game.makeMove(1, 0); // O
    game.makeMove(0, 1); // X
    game.makeMove(1, 1); // O
    game.makeMove(0, 2); // X wins
    expect(game.getWinner()).toBe('X');
    expect(game.isGameOver()).toBe(true);
  });
  
  it('should detect vertical win', () => {
    game.makeMove(0, 0); // X
    game.makeMove(0, 1); // O
    game.makeMove(1, 0); // X
    game.makeMove(1, 1); // O
    game.makeMove(2, 0); // X wins
    expect(game.getWinner()).toBe('X');
  });
  
  it('should detect diagonal win', () => {
    game.makeMove(0, 0); // X
    game.makeMove(0, 1); // O
    game.makeMove(1, 1); // X
    game.makeMove(0, 2); // O
    game.makeMove(2, 2); // X wins
    expect(game.getWinner()).toBe('X');
  });
  
  it('should detect draw', () => {
    // X O X
    // X O O
    // O X X
    game.makeMove(0, 0); // X
    game.makeMove(0, 1); // O
    game.makeMove(0, 2); // X
    game.makeMove(1, 1); // O
    game.makeMove(1, 0); // X
    game.makeMove(2, 0); // O
    game.makeMove(1, 2); // X
    game.makeMove(2, 2); // O
    game.makeMove(2, 1); // X
    expect(game.getWinner()).toBe(null);
    expect(game.isGameOver()).toBe(true);
  });
});
