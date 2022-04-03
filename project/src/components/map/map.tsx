import {CityLocation, OfferLocation} from '../../types/offer';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map/use-map';
import 'leaflet/dist/leaflet.css';
import {icon, LayerGroup, marker} from 'leaflet';
import {URL_ACTIVE_MARKER, URL_MARKER_DEFAULT} from '../../const';
import {MapWrapper} from './styled';

type MapProps = {
  city: CityLocation;
  points: OfferLocation[] | null;
  activeOfferLocation: OfferLocation | null;
};

function Map({ city, points, activeOfferLocation }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const layerGroup = useRef<LayerGroup | null>(null);

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
    if (map && points) {
      layerGroup.current?.remove();
      layerGroup.current = new LayerGroup();

      points.forEach((point) => {
        const { latitude, longitude } = point;

        layerGroup.current?.addLayer(
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
                : defaultIcon }),
        );
      });

      layerGroup.current?.addTo(map);
    }
  }, [map, points]);

  useEffect(() => {
    const { latitude, longitude, zoom } = city.location;

    map?.flyTo([latitude, longitude], zoom);
  }, [city]);

  return (
    <MapWrapper ref={mapRef} />
  );
}

export default Map;
