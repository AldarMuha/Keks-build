import { useNavigate } from 'react-router-dom';
import { AppRoute, FilterRating, Sorting } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviews } from '../../store/action';
//import { getReviews } from '../../store/site-data/selectors';
import { getFilterRating, getSorting } from '../../store/site-process/selectors';
import { setSorting } from '../../store/site-process/site-process';
import { Product } from '../../types/types';
import FilterRatingItem from '../filter-rating-item/filter-rating-item';

function FilterSortComments({ id }: Product): JSX.Element {
  const activeSorting = useAppSelector(getSorting);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const comments = useAppSelector(getReviews);
  const activeFilter = useAppSelector(getFilterRating);
  const translateFilter = (filter: FilterRating) => {
    switch (filter) {
      case FilterRating.Any:
        return 'Любой';
      case FilterRating.Short:
        return 'Низкий';
      case FilterRating.High:
        return 'Высокий';
    }
  };
  const onButtonDescendingClick = () => {
    dispatch(setSorting(Sorting.DateDescending));
    dispatch(fetchReviews(id));
    navigate(`${AppRoute.ProductPage}/${id}`);
  };
  const onButtonAscendingClick = () => {
    dispatch(setSorting(Sorting.DateAscending));
    dispatch(fetchReviews(id));
    navigate(`${AppRoute.ProductPage}/${id}`);
  };
  return (
    <div className="filter-sort">
      <div className="container">
        <div className="filter-sort__inner">
          <div className="filter-sort__filter-wrap">
            <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
            <div className="filter-sort__filter">
              <button className="filter-sort__filter-btn" type="button">
                {translateFilter(activeFilter)}
                <svg
                  className="filter-sort__filter-icon"
                  width={14}
                  height={15}
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-polygon" />
                </svg>
              </button>
              <ul className="filter-sort__filter-list">
                {
                  Object.values(FilterRating).map((filterItem) => (
                    <FilterRatingItem key={filterItem} filterItem={filterItem} filterActive={activeFilter} />
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="filter-sort__sort-wrap">
            <h3 className="filter-sort__sort-title">Сортировать по дате</h3>
            <div className="filter-sort__sort-btns-wrap">
              <button
                className={`filter-sort__sort-btn filter-sort__sort-btn--inc${(activeSorting === Sorting.DateAscending) ? ' filter-sort__sort-btn--active' : ''}`}
                name={Sorting.DateAscending}
                type="button"
                aria-label="сортировка по возрастанию"
                onClick={onButtonAscendingClick}
              >
                <svg
                  className="filter-sort__sort-icon"
                  width={19}
                  height={13}
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-chevron-top" />
                </svg>
              </button>
              <button
                className={`filter-sort__sort-btn filter-sort__sort-btn--desc ${(activeSorting === Sorting.DateDescending) ? ' filter-sort__sort-btn--active' : ''}`}
                name={Sorting.DateDescending}
                type="button"
                aria-label="сортировка по убыванию"
                onClick={onButtonDescendingClick}
              >
                <svg
                  className="filter-sort__sort-icon"
                  width={19}
                  height={13}
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-chevron-top" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSortComments;
