import {CityLocation} from '../../types/offer';
import {useRef} from 'react';

type MapProps = {
  city: CityLocation;
};

function Map({ city }: MapProps): JSX.Element {
  const mapRef = useRef(null);

  return (
    <div ref={mapRef}></div>
  );
}

export default Map;
