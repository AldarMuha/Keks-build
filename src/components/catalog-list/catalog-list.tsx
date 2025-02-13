import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteFavorite, fetchFavorite, putFavorite } from '../../store/action';
import { getIsFavoritesLoading, getIsProductsLoading, selectProducts } from '../../store/site-data/selectors';
import { getShownCards } from '../../store/site-process/selectors';
import CatalogCard from '../catalog-card/catalog-card';

function CatalogList(): JSX.Element {
  const isProductsLoading = useAppSelector(getIsProductsLoading);
  const products = useAppSelector(selectProducts);
  const shownCards = useAppSelector(getShownCards);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const dispatch = useAppDispatch();

  const handleFavoriteToggle = (id: string) => {
    const product = products.find((productItem) => productItem.id === id);
    if (product) {
      if (!product.isFavorite) {
        dispatch(putFavorite(id));
      } else {
        dispatch(deleteFavorite(id));
      }
      dispatch(fetchFavorite());
    }
  };
  if (isProductsLoading && isFavoritesLoading) {
    return <p>Загрузка....</p>;
  }
  return (
    <ul className="catalog__list">
      {
        products.slice(0, shownCards).map((product) => (
          <CatalogCard key={product.id} {...product} onFavoriteToggle={handleFavoriteToggle} />
        ))
      }
    </ul>
  );
}

export default CatalogList;
