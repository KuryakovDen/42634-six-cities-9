import {setLocationList, changeActiveLocation, citySlice} from './city';
import {mockCityState} from '../../mocks';

describe('Reducer: citySlice', () => {
  const state = mockCityState;

  describe('locationList tests', () => {
    it('set some cities to locationList', () => {
      expect(citySlice.reducer(state, setLocationList(['Paris', 'Amsterdam'])))
        .toEqual({ activeLocation: 'Cologne', locationList: ['Paris', 'Amsterdam'] });
    });

    it('set empty locationList', () => {
      const localState = { activeLocation: 'Cologne', locationList: ['Paris', 'Amsterdam'] };

      expect(citySlice.reducer(localState, setLocationList([])))
        .toEqual({ activeLocation: 'Cologne', locationList: [] });
    });
  });

  it('set another activeLocation', () => {
    expect(citySlice.reducer(state, changeActiveLocation('Hamburg')))
      .toEqual({ activeLocation: 'Hamburg', locationList: [] });
  });
});
