import React from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import Header from '../../components/header/header';
import LocationTabs from '../../components/location-tabs/location-tabs';

type MainScreenProps = {
  placesCount: number;
}

function MainScreen({ placesCount }: MainScreenProps): JSX.Element {
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
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active">Popular</li>
                  <li className="places__option">Price: low to high</li>
                  <li className="places__option">Price: high to low</li>
                  <li className="places__option">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferCard image={'img/apartment-01.jpg'} price={100} />
                <OfferCard image={'img/apartment-02.jpg'} price={100} />
                <OfferCard image={'img/apartment-03.jpg'} price={100} />
                <OfferCard image={'img/apartment-02.jpg'} price={100} />
                <OfferCard image={'img/apartment-01.jpg'} price={100} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
