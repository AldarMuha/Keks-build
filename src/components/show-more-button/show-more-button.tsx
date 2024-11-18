import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProducts } from '../../store/site-data/selectors';
import { setProductsShown } from '../../store/site-process/site-process';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);
  const STEP = 6;
  let cardsShown = STEP;

  const showMoreButtonClickHandler = () => {
    cardsShown += STEP;
    dispatch(setProductsShown(cardsShown));
  };
  return (
    <button className={`btn btn--second${(products.length <= cardsShown) ? ' visually-hidden' : ''}`} type="button" onClick={showMoreButtonClickHandler}>
      Показать еще
    </button>
  );
}

export default ShowMoreButton;
