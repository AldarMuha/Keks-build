import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCategories, getIsCategoriesLoading } from '../../store/site-data/selectors';
import FilterItemFirst from '../filter-item-first/filter-item-first';
//import FilterItemSecond from '../filter-item-second/filter-item-second';
import { addType, deleteType, setCategory, setProductsShown } from '../../store/site-process/site-process';
import { getCategory, getTypes } from '../../store/site-process/selectors';
import FilterItemSecond from '../filter-item-second/filter-item-second';

function CatalogFilter(): JSX.Element {
  //const [categoryActive, setCategoryActive] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const isCategoriesLoading = useAppSelector(getIsCategoriesLoading);
  const category = useAppSelector(getCategory);
  const types = useAppSelector(getTypes);
  const categoryActiveItem = categories.find((categoriesItem) => categoriesItem.category === category);
  const CategoriesChangeHandler = (categoryItem: string) => {
    dispatch(setCategory(categoryItem));
    dispatch(setProductsShown(6));
  };
  const TypesAddDeleteHandler = (typeItem: string) => {
    if (types.some((type) => type === typeItem)) {
      dispatch(deleteType(typeItem));
    } else {
      dispatch(addType(typeItem));
    }
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
                <FilterItemFirst key={categoryItem.category} {...categoryItem} isActive={categoryItem.category === category} onClick={CategoriesChangeHandler} />
              ))
            }
          </ul>
        </div>
        {
          (categories.length > 0 && category !== 'All') ?
            <div className="catalog-filter__second-level">
              <h3 className="catalog-filter__title catalog-filter__title--second-level">
                Начинки
              </h3>
              <ul className="catalog-filter__list catalog-filter__list--second-level">
                {
                  categoryActiveItem?.types.map((type) => (
                    <FilterItemSecond key={type} type={type} isActive={types.some((typeItem) => typeItem === type)} onClick={TypesAddDeleteHandler} />
                  ))
                }
              </ul>
            </div>
            : ''
        }
      </div>
    </div>
  );
}

export default CatalogFilter;
