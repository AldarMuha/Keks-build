import { FilterRating } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setFilter } from '../../store/site-process/site-process';
import { translateFilterRating } from '../../utils/utils';

type FilterRatingType = {
  filterItem: FilterRating;
  filterActive: FilterRating;
}

function FilterRatingItem({ filterItem, filterActive }: FilterRatingType): JSX.Element {
  const dispatch = useAppDispatch();
  const filterClickHandler = (filter: FilterRating) => {
    dispatch(setFilter(filter));
  };
  return (
    <li className="filter-sort__filter-item">
      <div className="custom-toggle custom-toggle--sorting">
        <input
          type="radio"
          id={filterItem}
          name="review-sort"
          defaultChecked={filterActive === filterItem}
          onClick={() => filterClickHandler(filterItem)}
        />
        <label
          className="custom-toggle__label"
          htmlFor={filterItem}
        >
          {translateFilterRating(filterItem)}
        </label>
      </div>
    </li>
  );
}

export default FilterRatingItem;
