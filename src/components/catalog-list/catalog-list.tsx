import { useAppSelector } from '../../hooks';
import { getIsProductsLoading, selectProducts } from '../../store/site-data/selectors';
import { getShownCards } from '../../store/site-process/selectors';
import CatalogCard from '../catalog-card/catalog-card';

function CatalogList(): JSX.Element {
  const isProductsLoading = useAppSelector(getIsProductsLoading);
  const products = useAppSelector(selectProducts);
  const shownCards = useAppSelector(getShownCards);
  if (isProductsLoading) {
    return <p>Загрузка....</p>;
  }
  return (
    <ul className="catalog__list">
      {
        products.slice(0, shownCards).map((product) => (
          <CatalogCard key={product.id} {...product} />
        ))
      }
    </ul>
  );
}

export default CatalogList;
