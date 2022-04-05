import {setLocationList, changeActiveLocation, citySlice} from './city';
import {mockCityState} from '../../mocks';

describe('Reducer: citySlice', () => {
  const state = mockCityState;

  it('returning initialState with unknown action', () => {
    expect(citySlice.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('locationList tests', () => {
    it('set some cities to locationList', () => {
      expect(citySlice.reducer(state, setLocationList(['Paris', 'Amsterdam'])))
        .toEqual({ activeLocation: 'Cologne', locationList: ['Paris', 'Amsterdam'] });
    });

    it('set empty locationList', () => {
      const state = { activeLocation: 'Cologne', locationList: ['Paris', 'Amsterdam'] }

      expect(citySlice.reducer(state, setLocationList([])))
        .toEqual({ activeLocation: 'Cologne', locationList: [] });
    });
  })

  it('set another activeLocation', () => {
    expect(citySlice.reducer(state, changeActiveLocation('Hamburg')))
      .toEqual({ activeLocation: 'Hamburg', locationList: [] });
  });
});
