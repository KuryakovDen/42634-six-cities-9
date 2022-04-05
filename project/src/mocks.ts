import {AuthState} from './store/auth/auth';
import {AuthStatus} from './const';

export const authMockState: AuthState = {
  authStatus: AuthStatus.Unknown, isAuthStatusLoading: false, userLogin: ''
};
