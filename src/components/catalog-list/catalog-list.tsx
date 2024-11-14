import { useAppSelector } from '../../hooks';
import { getIsProductsLoading, getProducts } from '../../store/site-data/selectors';
import CatalogCard from '../catalog-card/catalog-card';

function CatalogList(): JSX.Element {
  const isProductsLoading = useAppSelector(getIsProductsLoading);
  const products = useAppSelector(getProducts);
  if (isProductsLoading) {
    return <p>Загрузка....</p>;
  }
  return (
    <ul className="catalog__list">
      {
        products.map((product) => (
          <CatalogCard key={product.id} {...product} />
        ))
      }
    </ul>
  );
}

export default CatalogList;
