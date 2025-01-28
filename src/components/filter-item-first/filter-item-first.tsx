import { Category } from '../../types/types';
import { translateCategory } from '../../utils/utils';

type FilterItemFirstType = Category & {
  isActive: boolean;
  onClick: (categoryItem: string) => void;
}

function FilterItemFirst({ category, isActive, onClick }: FilterItemFirstType): JSX.Element {
  return (
    <li className="catalog-filter__item catalog-filter__item--first-level">
      <button className={`btn btn--filter-first-level${isActive ? ' is-active' : ''}`} type="button" onClick={() => onClick(category)}>
        {translateCategory(category)}
      </button>
    </li>
  );
}

export default FilterItemFirst;
