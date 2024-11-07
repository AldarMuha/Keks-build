import MainCard from '../main-card/main-card';
import { useAppSelector } from '../../hooks';
import { getIsProductsLoading, getProducts } from '../../store/site-data/selectors';

function MainCardList(): JSX.Element {
  const isProductsLoading = useAppSelector(getIsProductsLoading);
  const products = useAppSelector(getProducts);
  if (isProductsLoading) {
    return <p>Загрузка....</p>;
  }

  return (
    <ul className="random-main__list">
      {products.map((product) => (
        <MainCard key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default MainCardList;
