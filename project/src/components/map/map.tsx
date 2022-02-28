import {CityLocation} from '../../types/offer';
import {useRef} from 'react';
import useMap from '../../hooks/use-map/use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityLocation;
};

function Map({ city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  useMap(mapRef, city);

  return (
    <div ref={mapRef} style={{ height: '751px' }} />
  );
}

export default Map;
