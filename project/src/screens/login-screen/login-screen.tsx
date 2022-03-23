import React, {ChangeEvent, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {AuthData, loginAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Spinner from '../../components/spinner/spinner';
import {setUserLogin} from '../../store/auth/auth';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatusLoading = useAppSelector(({AUTH}) => AUTH.isAuthStatusLoading);
  const authStatus = useAppSelector(({AUTH}) => AUTH.authStatus);

  const [authData, setAuthData] = useState<AuthData>({
    login: '',
    password: '',
  });

  if (!authStatusLoading) {
    return <Spinner />;
  } else {
    if (authStatus === AuthStatus.Auth) {
      return <Navigate to={AppRoute.Main} />;
    }
  }

  const validPasswordPattern: boolean = (/([0-9].*[a-z])|([a-z].*[0-9])/).test(authData.password);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setUserLogin(authData.login));
    dispatch(loginAction(authData));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthData({ ...authData, login: e.target.value })}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthData({ ...authData, password: e.target.value })}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={(e) => onSubmit(e)}
                disabled={authData.password.trim() === '' || !validPasswordPattern}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
