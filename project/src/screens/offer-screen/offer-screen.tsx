import React, {useEffect} from 'react';
import Header from '../../components/header/header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import OffersList from '../../components/offers-list/offers-list';
import {AuthStatus, MAX_NEIGHBOR_OFFERS_COUNT} from '../../const';
import {Review} from '../../types/review';
import {Navigate, useParams} from 'react-router-dom';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loadOfferAction} from '../../store/api-actions';

type OfferScreenProps = {
  reviews: Review[];
}

function OfferScreen({ reviews }: OfferScreenProps): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector((state) => state.authStatus);
  const offerList = useAppSelector((state) => state.offerList);
  const currentOffer = useAppSelector((state) => state.currentOffer);

  useEffect(() => {
    dispatch(loadOfferAction(+id!));
  }, []);

  const neighborOffers = offerList
    .filter((offer) => currentOffer && offer.city.name === currentOffer.city.name && offer.id !== currentOffer.id)
    .slice(0, MAX_NEIGHBOR_OFFERS_COUNT);
  const points = neighborOffers
    .concat(currentOffer || [])
    .map((offer) => offer.location);

  if (!currentOffer) {
    return <Navigate to={'*'} />;
  }

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
                <button className={`${isFavorite ? 'place-card__bookmark-button--active' : 'place-card__bookmark-button'} button`} type="button">
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
                <ReviewsList reviews={reviews} />
                { authStatus === AuthStatus.Auth && <ReviewForm /> }
              </section>
            </div>
          </div>
          <section className="property__map map" style={{ backgroundImage: 'none', height: '700px', marginBottom: '80px' }}>
            <Map city={currentOffer.city} points={points} activeOfferLocation={currentOffer.location} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={neighborOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
