import { Category } from '../../types/types';

type FilterItemFirstType = Category & {
  onClick: (categoryItem: string) => void;
}

function FilterItemFirst({ category, onClick }: FilterItemFirstType): JSX.Element {
  return (
    <li className="catalog-filter__item catalog-filter__item--first-level">
      <button className="btn btn--filter-first-level" type="button" onClick={() => onClick(category)}>
        {category}
      </button>
    </li>
  );
}

export default FilterItemFirst;
