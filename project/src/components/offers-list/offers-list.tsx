import OfferCard from '../offer-card/offer-card';
import React, {useState} from 'react';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [, setActiveOffer] = useState<null | number>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseOver={() => setActiveOffer(offer.id)}
          onMouseLeave={() => setActiveOffer(null)}
        />))}
    </div>
  );
}

export default OffersList;
