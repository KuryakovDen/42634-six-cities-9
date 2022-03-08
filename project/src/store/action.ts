import {createAction} from '@reduxjs/toolkit';

export const changeActiveCity = createAction('city/changeActiveCity', (newActiveCity: string) => ({ payload: newActiveCity }));
export const setOfferList = createAction('offer/setOfferList');
