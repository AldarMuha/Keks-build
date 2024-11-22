import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCategories, getIsCategoriesLoading } from '../../store/site-data/selectors';
import FilterItemFirst from '../filter-item-first/filter-item-first';
//import FilterItemSecond from '../filter-item-second/filter-item-second';
import { setCategory } from '../../store/site-process/site-process';

function CatalogFilter(): JSX.Element {
  //const [categoryActive, setCategoryActive] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const isCategoriesLoading = useAppSelector(getIsCategoriesLoading);
  //const categoryActiveItem = categories.find((categoriesItem) => categoriesItem.category === categoryActive);
  const CategoriesChangeHandler = (categoryItem: string) => {
    dispatch(setCategory(categoryItem));
  };
  if (isCategoriesLoading) {
    return <p>Загрузка</p>;
  }
  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">
            основы
          </h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            {
              categories.map((categoryItem) => (
                <FilterItemFirst key={categoryItem.category} {...categoryItem} onClick={CategoriesChangeHandler} />
              ))
            }
          </ul>
        </div>
        <div className="catalog-filter__second-level">
          <h3 className="catalog-filter__title catalog-filter__title--second-level">
            Начинки
          </h3>
          <ul className="catalog-filter__list catalog-filter__list--second-level">

          </ul>
        </div>

      </div>
    </div>
  );
}

export default CatalogFilter;
