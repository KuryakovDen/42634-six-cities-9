import { useAppDispatch, useAppSelector } from '../../hooks';
import {changeActiveCity} from '../../store/action';

function LocationTabs(): JSX.Element {
  const locations = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            locations.map((location) => (
              <li className="locations__item" key={location} onClick={() => dispatch(changeActiveCity(location))}>
                <a className={`${activeCity === location && 'tabs__item--active'} locations__item-link tabs__item`} href="#">
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
