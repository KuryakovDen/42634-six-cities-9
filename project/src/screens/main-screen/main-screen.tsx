import React, {useState} from 'react';
import Header from '../../components/header/header';
import LocationTabs from '../../components/location-tabs/location-tabs';
import OffersSorting from '../../components/offers-sorting/offers-sorting';
import OffersList from '../../components/offers-list/offers-list';
import {Offer, OfferLocation} from '../../types/offer';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import Spinner from '../../components/spinner/spinner';

function MainScreen(): JSX.Element {
  const [activeOfferLocation, setActiveOfferLocation] = useState<null | OfferLocation>(null);

  const activeLocation = useAppSelector((state) => state.activeLocation);
  const sortingOption = useAppSelector((state) => state.activeSortingOption);

  const offerList = useAppSelector((state) => state.offerList);
  const offersForActiveLocation = offerList ? offerList.filter((offer) => offer.city.name === activeLocation) : [];
  const points = offersForActiveLocation.map((offer) => offer.location);

  const getOffersBySorting = (option: string): Offer[] => {
    switch (option) {
      case 'Price: low to high':
        return offersForActiveLocation.sort((prevOffer, nextOffer) => prevOffer.price - nextOffer.price);
      case 'Price: high to low':
        return offersForActiveLocation.sort((prevOffer, nextOffer) => nextOffer.price - prevOffer.price);
      case 'Top rated first':
        return offersForActiveLocation.sort((prevOffer, nextOffer) => nextOffer.rating - prevOffer.rating);
      default:
        return offersForActiveLocation;
    }
  };

  return offerList && offerList.length > 0 ? (
    (
      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <LocationTabs />

          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersForActiveLocation.length} places to stay in {activeLocation}</b>
                <OffersSorting />
                { offerList && <OffersList offers={getOffersBySorting(sortingOption)} onMouseOver={setActiveOfferLocation} onMouseLeave={setActiveOfferLocation} /> }
              </section>
              <div className="cities__right-section">
                <section className="cities__map map" style={{ backgroundImage: 'none', width: '512px' }}>
                  { offersForActiveLocation.length > 0 && <Map city={offersForActiveLocation[0].city} points={points} activeOfferLocation={activeOfferLocation} /> }
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  ) : (
    <Spinner />
  );
}

export default MainScreen;
