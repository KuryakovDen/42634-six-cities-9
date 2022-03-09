import React from 'react';
import { SpinnerDiamond } from 'spinners-react';

function Spinner(): JSX.Element {
  const SPINNER_SIZE = 120;
  const SPINNER_COLOR = '#4481c3';
  const SPINNER_SPEED = 200;

  return (
    <SpinnerDiamond
      size={SPINNER_SIZE}
      color={SPINNER_COLOR}
      speed={SPINNER_SPEED}
    />
  );
}

export default Spinner;
