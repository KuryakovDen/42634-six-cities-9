import React, {memo, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeActiveSortingOption} from '../../store/offer/offer';

function OffersSorting(): JSX.Element {
  const [open, setOpen] = useState(false);

  const sortingOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
  const dispatch = useAppDispatch();
  const activeSortingOption = useAppSelector(({OFFER}) => OFFER.activeSortingOption);

  const onOptionClick = (option: string) => {
    dispatch(changeActiveSortingOption(option));
    setOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={() => setOpen(!open)}>
        {activeSortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`${open && 'places__options--opened'} places__options places__options--custom`}>
        {sortingOptions.map((option) => (
          <li
            key={option}
            className={`${activeSortingOption === option && 'places__option--active'} places__option`}
            onClick={() => onOptionClick(option)}
          >
            {option}
          </li>
        ),
        )}
      </ul>
    </form>
  );
}

export default memo(OffersSorting);
