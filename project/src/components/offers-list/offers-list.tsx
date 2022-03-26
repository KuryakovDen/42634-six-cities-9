import OfferCard from '../offer-card/offer-card';
import React from 'react';
import {Offer, OfferLocation} from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  onMouseOver?: (location: OfferLocation) => void;
  onMouseLeave?: (location: null) => void;
};

function OffersList({ offers, onMouseLeave, onMouseOver }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseOver={() => onMouseOver && onMouseOver(offer.location)}
          onMouseLeave={() => onMouseLeave && onMouseLeave(null)}
        />))}
    </div>
  );
}

export default OffersList;
