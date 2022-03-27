import React, {useEffect} from 'react';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loadFavoriteOffersAction} from '../../store/api-actions';
import {Offer} from '../../types/offer';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesOffers: Offer[] | [] = useAppSelector(({OFFER}) => OFFER.favoriteOffers);

  const uniqueCities = [...new Set(favoritesOffers.map((offer) => offer.city.name))];

  useEffect(() => {
    dispatch(loadFavoriteOffersAction());
  }, []);

  return (
    <div className={favoritesOffers.length > 0 ? 'page' : 'page page--favorites-empty'}>
      <Header />

      {favoritesOffers.length > 0 ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {uniqueCities.map((uniqueCity) => {
                  return (
                    <li className="favorites__locations-items" key={uniqueCity}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{uniqueCity}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <div className="favorites__places">
                          {favoritesOffers
                            .filter((favoriteOffer) => favoriteOffer.city.name === uniqueCity)
                            .map((offer) => {
                              return (
                                <article className="favorites__card place-card" key={offer.id}>
                                  <div className="favorites__image-wrapper place-card__image-wrapper">
                                    <a href="#">
                                      <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
                                    </a>
                                  </div>
                                  <div className="favorites__card-info place-card__info">
                                    <div className="place-card__price-wrapper">
                                      <div className="place-card__price">
                                        <b className="place-card__price-value">&euro;{offer.price}</b>
                                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                                      </div>
                                      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                        <svg className="place-card__bookmark-icon" width="18" height="19">
                                          <use xlinkHref="#icon-bookmark" />
                                        </svg>
                                        <span className="visually-hidden">In bookmarks</span>
                                      </button>
                                    </div>
                                    <div className="place-card__rating rating">
                                      <div className="place-card__stars rating__stars">
                                        <span className="visually-hidden">Rating</span>
                                      </div>
                                    </div>
                                    <h2 className="place-card__name">
                                      <a href="#">{offer.title}</a>
                                    </h2>
                                    <p className="place-card__type">{offer.type}</p>
                                  </div>
                                </article>
                              )
                            })}
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future
                  trips.</p>
              </div>
            </section>
          </div>
        </main>
      )}
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
