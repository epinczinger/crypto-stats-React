import coinReducer from '../coins';

const initialState = [];
describe('Coin reducer', () => {
  it('returns the initial state', () => {
    expect(coinReducer(undefined, {})).toEqual(initialState);
  });
});
