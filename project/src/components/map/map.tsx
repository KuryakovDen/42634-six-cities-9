import {CityLocation, OfferLocation} from '../../types/offer';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map/use-map';
import 'leaflet/dist/leaflet.css';
import {icon, marker} from 'leaflet';
import {URL_ACTIVE_MARKER, URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  city: CityLocation;
  points: OfferLocation[];
  activeOfferLocation: OfferLocation | null;
};

function Map({ city, points, activeOfferLocation }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultIcon = icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const activeIcon = icon({
    iconUrl: URL_ACTIVE_MARKER,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const { latitude, longitude } = point;

        marker({
          lat: latitude,
          lng: longitude,
        }, {
          icon:
            (activeOfferLocation &&
              point.latitude === activeOfferLocation.latitude &&
              point.longitude === activeOfferLocation.longitude
            )
              ? activeIcon
              : defaultIcon })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div ref={mapRef} style={{ height: '751px' }} />
  );
}

export default Map;
