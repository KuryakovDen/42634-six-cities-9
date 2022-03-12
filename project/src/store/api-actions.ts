import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {loadOffers} from './action';

export const loadOffersAction = createAsyncThunk('data/loadOffers', async () => {
  const { data } = await api.get('/hotels');
  store.dispatch(loadOffers(data));
});
