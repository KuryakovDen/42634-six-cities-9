import { useAppDispatch, useAppSelector } from '../../hooks';
import {changeActiveLocation} from '../../store/city/city';
import {memo} from 'react';

function LocationTabs(): JSX.Element {
  const dispatch = useAppDispatch();

  const locations = useAppSelector(({CITY}) => CITY.locationList);
  const activeLocation = useAppSelector(({CITY}) => CITY.activeLocation);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            locations.map((location) => (
              <li className="locations__item" key={location} onClick={() => dispatch(changeActiveLocation(location))}>
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

export default memo(LocationTabs);
