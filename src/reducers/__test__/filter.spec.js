import filterReducer from '../filter';

const initialState = 'All';
describe('Filter reducer', () => {
  it('returns the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(initialState);
  });
  it('change filter', () => {
    expect(filterReducer(initialState, { type: 'CHANGE_FILTER', payload: 'Bullish' })).toEqual(
      'Bullish',
    );
  });
  it('change filter', () => {
    expect(
      filterReducer(initialState, { type: 'CHANGE_FILTER', payload: 'Bearish' }),
    ).toEqual('Bearish');
  });
});
