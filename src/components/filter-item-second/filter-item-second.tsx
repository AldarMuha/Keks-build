type FilterItemSecondType = {
  type: string;
}

function FilterItemSecond({ type }: FilterItemSecondType): JSX.Element {
  return (
    <li className="catalog-filter__item catalog-filter__item--second-level">
      <div className="custom-toggle custom-toggle--checkbox">
        <input
          type="checkbox"
          defaultValue="chocolate"
          id="catalog-second-level-id-1"
          name="catalog-second-level"
        />
        <label
          className="custom-toggle__label"
          htmlFor="catalog-second-level-id-1"
        >
          {type}
        </label>
      </div>
    </li>
  );
}

export default FilterItemSecond;
