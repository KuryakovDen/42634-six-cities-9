import React from 'react';
import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute, RATING_COEFFICIENT} from '../../const';

type OfferCardProps = {
  offer: Offer;
  onMouseOver: () => void;
  onMouseLeave: () => void;
};

function OfferCard({ offer, onMouseOver, onMouseLeave }: OfferCardProps): JSX.Element {
  const { id, title, type, price, previewImage, isFavorite, isPremium, rating } = offer;

  const roundedRating = Math.round(rating);

  return (
    <article className="cities__place-card place-card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite ? 'place-card__bookmark-button--active' : 'place-card__bookmark-button'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {roundedRating}
            <span style={{width: `${roundedRating * RATING_COEFFICIENT}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
