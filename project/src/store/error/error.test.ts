import {errorSlice, setError} from './error';
import {mockErrorState} from '../../mocks';

describe('Reducer: errorSlice', () => {
  const state = mockErrorState;

  it('returning initialState with unknown action', () => {
    expect(errorSlice.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  it('set errorText', () => {
    expect(errorSlice.reducer(state, setError('Some error')))
      .toEqual({ error: 'Some error' });
  });

  it('set empty string for error', () => {
    const state = { error: 'Some error' };

    expect(errorSlice.reducer(state, setError('')))
      .toEqual({ error: '' });
  });
});
