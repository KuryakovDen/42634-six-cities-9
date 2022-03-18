import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {AuthStatus} from '../const';

export const changeAuthStatus = createAction('auth/changeAuthStatus', (newAuthStatus: AuthStatus) => ({ payload: newAuthStatus }));
export const changeActiveLocation = createAction('city/changeActiveLocation', (newActiveLocation: string) => ({ payload: newActiveLocation }));
export const changeActiveSortingOption = createAction('offer/changeActiveSortingOption', (newOption: string) => ({ payload: newOption }));
export const loadOffers = createAction('data/loadOffers', (offers: Offer[]) => ({ payload: offers }));
export const loadOffer = createAction('data/loadOffer', (currentOffer: Offer) => ({ payload: currentOffer }));
export const loadNeighborOffers = createAction('data/loadNeighborOffers', (neighborOffers: Offer[] | []) => ({ payload: neighborOffers }));
export const setError = createAction('data/setError', (newError: string) => ({ payload: newError }));
export const setUserLogin = createAction('auth/setUserLogin', (userLogin: string) => ({ payload: userLogin }));
export const setAuthStatusLoading = createAction('auth/setAuthStatusLoading', (newStatus: boolean) => ({ payload: newStatus }));
