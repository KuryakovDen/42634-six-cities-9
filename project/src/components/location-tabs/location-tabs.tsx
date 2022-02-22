import React, {useState} from 'react';

function LocationTabs(): JSX.Element {
  const [activeLocation, setActiveLocation] = useState('Paris');

  const locations = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            locations.map((location) => (
              <li className="locations__item" key={location} onClick={() => setActiveLocation(location)}>
                <a className={`${activeLocation === location && 'tabs__item--active'} locations__item-link tabs__item`} href="#">
                  <span>{location}</span>
                </a>
              </li>))
          }
        </ul>
      </section>
    </div>
  );
}

export default LocationTabs;
