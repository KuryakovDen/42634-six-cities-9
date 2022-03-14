import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {store} from '../../store';
import {useAppSelector} from '../../hooks';

function UserInfo(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authStatus === AuthStatus.Auth ? (
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#" onClick={() => store.dispatch(logoutAction())}>
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default UserInfo;
