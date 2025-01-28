import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectProducts } from '../../store/site-data/selectors';
import { getShownCards } from '../../store/site-process/selectors';
import { setProductsShown } from '../../store/site-process/site-process';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const STEP = 6;
  const cardsShown = useAppSelector(getShownCards);

  const showMoreButtonClickHandler = () => {
    dispatch(setProductsShown(cardsShown + STEP));
  };
  return (
    <button className={`btn btn--second${(products.length <= cardsShown) ? ' visually-hidden' : ''}`} type="button" onClick={() => showMoreButtonClickHandler()}>
      Показать еще
    </button>
  );
}

export default ShowMoreButton;
