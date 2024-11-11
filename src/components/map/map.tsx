import { useEffect, useRef } from 'react';
import type { Address } from '../../types/types';
import { useMap } from '../../hooks/use-map';
import { icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapAddress = {
  address: Address;
}

function Map({ address }: MapAddress): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, address);

  useEffect(() => {
    if (map) {
      const iconMap = icon({
        iconUrl: address.location.iconMarker,
        iconSize: [52, 52],
        iconAnchor: [26, 52],
      });
      const marker = new Marker({
        lat: address.location.latitude,
        lng: address.location.longtitude,
      });
      marker
        .setIcon(iconMap)
        .addTo(map);
    }
  }, [map, address]);
  return (
    <div className="map__wrapper" id="map" ref={mapRef} />
  );
}

export default Map;
