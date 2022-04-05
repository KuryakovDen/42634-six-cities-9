import {authSlice, changeAuthStatus, setAuthStatusLoading, setUserLogin} from './auth';
import {AuthStatus} from '../../const';
import {mockAuthState} from '../../mocks';

describe('Reducer: authSlice', () => {
  const state = mockAuthState;

  describe('authStatus changing tests', () => {
    it('set authStatus to AuthStatus.Auth', () => {
      expect(authSlice.reducer(state, changeAuthStatus(AuthStatus.Auth)))
        .toEqual({ authStatus: AuthStatus.Auth, isAuthStatusLoading: false, userLogin: '' });
    });

    it('set authStatus to AuthStatus.NoAuth', () => {
      expect(authSlice.reducer(state, changeAuthStatus(AuthStatus.NoAuth)))
        .toEqual({ authStatus: AuthStatus.NoAuth, isAuthStatusLoading: false, userLogin: '' });
    });
  });

  it('set authStatusLoading to be true', () => {
    expect(authSlice.reducer(state, setAuthStatusLoading(true)))
      .toEqual({ authStatus: AuthStatus.Unknown, isAuthStatusLoading: true, userLogin: '' });
  });

  it('set userLogin', () => {
    expect(authSlice.reducer(state, setUserLogin('KuryakovDensi@yandex.ru')))
      .toEqual({ authStatus: AuthStatus.Unknown, isAuthStatusLoading: false, userLogin: 'KuryakovDensi@yandex.ru' });
  });
});
