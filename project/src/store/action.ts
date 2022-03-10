import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const changeActiveLocation = createAction('city/changeActiveLocation', (newActiveLocation: string) => ({ payload: newActiveLocation }));
export const changeActiveSortingOption = createAction('offer/changeActiveSortingOption', (newOption: string) => ({ payload: newOption }));
export const loadOffers = createAction('offer/loadOffers', (offers: Offer[]) => ({ payload: offers }));
