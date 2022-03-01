import React, {useState} from 'react';
import Header from '../../components/header/header';
import LocationTabs from '../../components/location-tabs/location-tabs';
import OffersSorting from '../../components/offers-sorting/offers-sorting';
import OffersList from '../../components/offers-list/offers-list';
import {Offer, OfferLocation} from '../../types/offer';
import Map from '../../components/map/map';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({ offers }: MainScreenProps): JSX.Element {
  const [activeOfferLocation, setActiveOfferLocation] = useState<null | OfferLocation>(null);

  const defaultCity = offers[0].city;
  const points = offers.map((offer) => offer.location);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationTabs />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <OffersSorting />
              <OffersList offers={offers} onMouseOver={setActiveOfferLocation} onMouseLeave={setActiveOfferLocation} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" style={{ backgroundImage: 'none', width: '512px' }}>
                <Map city={defaultCity} points={points} activeOfferLocation={activeOfferLocation} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
