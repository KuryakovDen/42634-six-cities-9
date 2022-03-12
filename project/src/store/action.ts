import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {AuthStatus} from '../const';

export const changeAuthStatus = createAction('auth/changeAuthStatus', (newAuthStatus: AuthStatus) => ({ payload: newAuthStatus }));
export const changeActiveLocation = createAction('city/changeActiveLocation', (newActiveLocation: string) => ({ payload: newActiveLocation }));
export const changeActiveSortingOption = createAction('offer/changeActiveSortingOption', (newOption: string) => ({ payload: newOption }));
export const loadOffers = createAction('data/loadOffers', (offers: Offer[]) => ({ payload: offers }));
