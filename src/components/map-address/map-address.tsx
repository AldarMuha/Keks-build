import { Address } from '../../types/types';

type MapAddressType = Address & {
  isActive: boolean;
  onClick: (name: string) => void;
}

function MapAddress({ name, textContent, isActive, onClick }: MapAddressType): JSX.Element {
  return (
    <li className="map__address">
      <div className="custom-toggle custom-toggle--radio custom-toggle--address">
        <input
          type="radio"
          defaultValue={name}
          id={name}
          name="user-agreement"
          defaultChecked={isActive}
          onClick={() => onClick(name)}
        />
        <label
          className="custom-toggle__label"
          htmlFor={name}
        >
          {textContent.name}
        </label>
        <address className="custom-toggle__address">
          {textContent.location}
          <svg
            className="custom-toggle__icon"
            width={26}
            height={24}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-keks-footprint" />
          </svg>
        </address>
      </div>
    </li>
  );
}

export default MapAddress;
