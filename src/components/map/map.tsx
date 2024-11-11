import { useEffect, useRef } from 'react';
import type { Address } from '../../types/types';
import { useMap } from '../../hooks/use-map';
import { icon, LayerGroup, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapAddress = {
  address: Address;
}

function Map({ address }: MapAddress): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, address);
  /*
  let markerGroup: LayerGroup | null = null;
  if (map) {
    markerGroup = layerGroup().addTo(map);
  }
*/
  useEffect(() => {
    const markers: Marker[] = [];
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
      markers.push(marker);
      map.setView({ lat: address.location.latitude, lng: address.location.longtitude });
    }
    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };
  }, [map, address]);
  return (
    <div className="map__wrapper" id="map" ref={mapRef} />
  );
}

export default Map;
