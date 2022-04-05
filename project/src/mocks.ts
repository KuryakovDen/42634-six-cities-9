import {AuthState} from './store/auth/auth';
import {AuthStatus} from './const';
import {CityState} from './store/city/city';

export const authMockState: AuthState = {
  authStatus: AuthStatus.Unknown, isAuthStatusLoading: false, userLogin: ''
};

export const cityMockState: CityState = {
  locationList: [],
  activeLocation: 'Cologne'
};
