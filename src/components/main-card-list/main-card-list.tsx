import MainCard from '../main-card/main-card';
import { useAppSelector } from '../../hooks';
import { getIsProductsLoading, getProducts } from '../../store/site-data/selectors';
import CatalogLink from '../catalog-link/catalog-link';
import { getRandomArrayElements } from '../../utils/utils';

function MainCardList(): JSX.Element {
  const isProductsLoading = useAppSelector(getIsProductsLoading);
  const products = useAppSelector(getProducts);
  if (isProductsLoading) {
    return <p>Загрузка....</p>;
  }
  return (
    <ul className="random-main__list">
      {getRandomArrayElements(3, products).map((product) => (
        <MainCard key={product.id} {...product} />
      ))}
      <CatalogLink />
    </ul>
  );
}

export default MainCardList;
