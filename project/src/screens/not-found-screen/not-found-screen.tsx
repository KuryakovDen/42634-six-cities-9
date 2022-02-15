import React from 'react';

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
              <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <span style={{fontSize: '28px', fontWeight: '500', marginRight: '10px'}}>404</span>
                <p>Not found</p>
              </div>

              <p>Go to main page</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
