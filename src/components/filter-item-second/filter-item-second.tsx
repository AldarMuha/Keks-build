import { translateTypes } from '../../utils/utils';

type FilterItemSecondType = {
  type: string;
  isActive: boolean;
  onClick: (type: string) => void;
}

function FilterItemSecond({ type, isActive, onClick }: FilterItemSecondType): JSX.Element {
  return (
    <li className="catalog-filter__item catalog-filter__item--second-level">
      <div className="custom-toggle custom-toggle--checkbox">
        <input
          type="checkbox"
          defaultValue="chocolate"
          id={`catalog-second-level-type-${type}`}
          name="catalog-second-level"
          onChange={() => onClick(type)}
          checked={isActive}
        />
        <label
          className="custom-toggle__label"
          htmlFor={`catalog-second-level-type-${type}`}
        >
          {translateTypes(type)}
        </label>
      </div>
    </li>
  );
}

export default FilterItemSecond;
