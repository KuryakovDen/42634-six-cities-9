import React, {useEffect} from 'react';
import Header from '../../components/header/header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import OffersList from '../../components/offers-list/offers-list';
import {AppRoute, AuthStatus} from '../../const';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  changeFavoriteStatusAction,
  loadCommentListAction,
  loadNeighborOffersAction,
  loadOfferAction
} from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';
import {checkIsCurrentOfferLoading} from '../../store/offer/offer';
import {loadNewCommentList} from '../../store/comment/comment';
import {MapContainer} from './styled';

function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(({AUTH}) => AUTH.authStatus);
  const currentOffer = useAppSelector(({OFFER}) => OFFER.currentOffer);
  const currentOfferLoading = useAppSelector(({OFFER}) => OFFER.isCurrentOfferLoading);
  const neighborOffers = useAppSelector(({OFFER}) => OFFER.neighborOffers);
  const neighborOffersLoaded = useAppSelector(({OFFER}) => OFFER.isNeighborOffersLoaded);
  const commentList = useAppSelector(({COMMENT}) => COMMENT.commentList);
  const newCommentList = useAppSelector(({COMMENT}) => COMMENT.newCommentList);
  const commentListLoaded = useAppSelector(({COMMENT}) => COMMENT.isCommentListLoaded);

  useEffect(() => {
    if (!id) {
      navigate(AppRoute.NotFound);
    } else {
      dispatch(loadOfferAction(+id));
      dispatch(loadNeighborOffersAction(+id));
      dispatch(loadCommentListAction(+id));
    }

    return () => {
      dispatch(checkIsCurrentOfferLoading(true));
      dispatch(loadNewCommentList([]));
    };
  }, [dispatch, id, navigate]);

  const points = currentOffer && [ ...neighborOffers, currentOffer ].map((offer) => offer && offer.location);

  if (currentOfferLoading || !neighborOffersLoaded || !commentListLoaded) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

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

  const { title, images, isPremium, isFavorite, description, rating, type, bedrooms, maxAdults, price, goods, host } = currentOffer;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={`${isFavorite ? 'place-card__bookmark-button--active' : 'place-card__bookmark-button'} button`}
                  type="button"
                  onClick={() => currentOffer.id && onClickFavoriteButton(currentOffer.id)}
                >
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => <li className="property__inside-item" key={good}>{good}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`${host.isPro && 'property__avatar-wrapper--pro'} property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  { host.isPro && <span className="property__user-status">Pro</span> }
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={newCommentList.length > 0 ? newCommentList : commentList} />
                { authStatus === AuthStatus.Auth && <ReviewForm /> }
              </section>
            </div>
          </div>
          <MapContainer className="property__map map">
            <Map city={currentOffer.city} points={points} activeOfferLocation={currentOffer.location} />
          </MapContainer>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            { neighborOffersLoaded ? <OffersList offers={neighborOffers} /> : <Spinner /> }
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
