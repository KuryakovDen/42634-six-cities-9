import React from 'react';
import {AppRoute} from '../../const';
import {CitiesContainer, Error, RouteLink} from './styled';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <CitiesContainer>
                <Error>404</Error>
                <p>Not found</p>
              </CitiesContainer>
              <RouteLink to={AppRoute.Main}>Go to main page</RouteLink>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
