import {createAction} from '@reduxjs/toolkit';

export const changeActiveLocation = createAction('city/changeActiveLocation', (newActiveLocation: string) => ({ payload: newActiveLocation }));
export const changeActiveSortingOption = createAction('offer/changeActiveSortingOption', (newOption: string) => ({ payload: newOption }));
export const setOfferList = createAction('offer/setOfferList');
