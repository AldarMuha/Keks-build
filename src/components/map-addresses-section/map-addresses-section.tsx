import { useState } from 'react';
import { addresses } from '../../const';
import Map from '../map/map';
import MapAddress from '../map-address/map-address';

function MapAddressesSection(): JSX.Element {
  const [addressName, setAddressName] = useState<string>(addresses[0].name);
  const changeAddressHandler = (activeAddress: string) => {
    setAddressName(activeAddress);
  };
  const address = addresses.find((addressItem) => addressItem.name === addressName);
  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>
        {(address !== undefined) ? <Map address={address} /> : ''}
        <ul className="map__addresses">
          {
            addresses.map((addressItem) => (<MapAddress key={addressItem.id} {...addressItem} isActive={addressName === addressItem.name} onClick={changeAddressHandler} />))
          }
        </ul>
      </div>
    </section>
  );
}

export default MapAddressesSection;
