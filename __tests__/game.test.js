import Game from "../src/game.js"

describe('Game', () => {

  let game = new Game;

  test('Generic month converter test',() => {
    expect(game.monthConverter(1)).toEqual(0);
  });

  test('Test the examples Wikipedia gives',() => {
    expect(game.calculateWeekday(1777,4,30)).toEqual('Wednesday');
  });

  test('Test the examples Wikipedia gives',() => {
    expect(game.calculateWeekday(1855,2,23)).toEqual('Friday');
  });
});