import React from 'react';
import {Offer} from '../../types/offer';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthStatus, RATING_COEFFICIENT} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFavoriteStatusAction} from '../../store/api-actions';

type OfferCardProps = {
  offer: Offer;
  onMouseOver: () => void;
  onMouseLeave: () => void;
};

function OfferCard({ offer, onMouseOver, onMouseLeave }: OfferCardProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(({AUTH}) => AUTH.authStatus);

  const { id, title, type, price, previewImage, isFavorite, isPremium, rating } = offer;
  const roundedRating = Math.round(rating);

  const getOfferStatus = (favorite: boolean) => {
    let status: number;
    favorite ? status = 0 : status = 1;

    return status;
  };

  const onClickFavoriteButton = (offerId: number) => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(changeFavoriteStatusAction(offerId, getOfferStatus(isFavorite)));
    } else {
      return navigate(AppRoute.Login);
    }
  };

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
          <button
            className={`${isFavorite ? 'place-card__bookmark-button--active':'place-card__bookmark-button'} button`}
            onClick={() => onClickFavoriteButton(offer.id)}
            type="button"
          >
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
