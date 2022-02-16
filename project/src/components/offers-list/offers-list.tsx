import OfferCard from '../offer-card/offer-card';
import React from 'react';

function OffersList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      <OfferCard image={'img/apartment-01.jpg'} price={100} />
      <OfferCard image={'img/apartment-02.jpg'} price={100} />
      <OfferCard image={'img/apartment-03.jpg'} price={100} />
      <OfferCard image={'img/apartment-02.jpg'} price={100} />
      <OfferCard image={'img/apartment-01.jpg'} price={100} />
    </div>
  );
}

export default OffersList;
