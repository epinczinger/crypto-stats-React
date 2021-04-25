import toggleReducer from '../toggle';

const initialState = 'dark';

describe('Toggle reducer', () => {
  it('returns the initial state', () => {
    expect(toggleReducer(undefined, {})).toEqual(initialState);
  });
  it('change theme', () => {
    expect(toggleReducer(initialState, { type: 'TOGGLE_THEME' })).toEqual('light');
  });
  it('change theme', () => {
    expect(toggleReducer('light', { type: 'TOGGLE_THEME' })).toEqual(
      'dark',
    );
  });
});
