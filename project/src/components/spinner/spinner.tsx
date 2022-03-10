import React from 'react';
import { SpinnerInfinity } from 'spinners-react';
import {SPINNER_COLOR, SPINNER_SIZE, SPINNER_SPEED} from '../../const';

function Spinner(): JSX.Element {
  return (
    <div style={{ width: '100%', minHeight: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ marginBottom: '20px', fontSize: '28px', fontWeight: '500' }}>Loading...</span>
        <SpinnerInfinity
          size={SPINNER_SIZE}
          color={SPINNER_COLOR}
          speed={SPINNER_SPEED}
        />
      </div>
    </div>
  );
}

export default Spinner;
