import React from 'react';
import { SpinnerInfinity } from 'spinners-react';
import {SPINNER_COLOR, SPINNER_SIZE, SPINNER_SPEED} from '../../const';
import {SpinnerContainer, SpinnerText, SpinnerWrapper} from './styled';

function Spinner(): JSX.Element {
  return (
    <SpinnerWrapper>
      <SpinnerContainer>
        <SpinnerText>Loading...</SpinnerText>
        <SpinnerInfinity
          size={SPINNER_SIZE}
          color={SPINNER_COLOR}
          speed={SPINNER_SPEED}
        />
      </SpinnerContainer>
    </SpinnerWrapper>
  );
}

export default Spinner;
