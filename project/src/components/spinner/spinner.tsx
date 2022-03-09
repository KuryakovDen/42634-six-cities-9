import React from 'react';
import { SpinnerDiamond } from 'spinners-react';
import {SPINNER_COLOR, SPINNER_SIZE, SPINNER_SPEED} from '../../const';

function Spinner(): JSX.Element {
  return (
    <SpinnerDiamond
      size={SPINNER_SIZE}
      color={SPINNER_COLOR}
      speed={SPINNER_SPEED}
    />
  );
}

export default Spinner;
