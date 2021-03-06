import {Map} from 'leaflet';
import leaflet from 'leaflet';
import {MutableRefObject, useEffect, useState} from 'react';
import {CityLocation} from '../../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityLocation): Map | null {
  const { latitude, longitude } = city.location;
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: 10,
      });

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
