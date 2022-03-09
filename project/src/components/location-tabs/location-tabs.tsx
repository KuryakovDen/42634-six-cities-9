import { useAppDispatch, useAppSelector } from '../../hooks';
import {changeActiveLocation} from '../../store/action';

function LocationTabs(): JSX.Element {
  const locations = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  const activeLocation = useAppSelector((state) => state.activeLocation);
  const dispatch = useAppDispatch();

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

export default LocationTabs;
