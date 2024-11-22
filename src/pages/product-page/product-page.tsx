import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getIsProductLoading, getProduct } from '../../store/site-data/selectors';
import { useEffect } from 'react';
import { fetchProduct, fetchReviews } from '../../store/action';
import Details from '../../components/details/details';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ErrorComments from '../../components/error-comments/error-comments';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import NewReview from '../../components/new-review/new-review';

function ProductPage(): JSX.Element | null {
  const params = useParams();
  //const userStatusLoading = useAppSelector(getIsUserStatusLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const isProductLoading = useAppSelector(getIsProductLoading);
  const product = useAppSelector(getProduct);
  useEffect(() => {
    const { id } = params;
    if (id) {
      const parseId = id;
      dispatch(fetchProduct(parseId));
      dispatch(fetchReviews(parseId));
    }
  }, [params, dispatch]);
  if (!product) {
    return null;
  }
  if (isProductLoading) {
    return <p>Загрузка</p>;
  }
  if (product === null) {
    return <p>Нет данных</p>;
  }
  return (
    <>
      <Header />
      <h1 className="visually-hidden">Карточка: ошибка загрузки комментариев</h1>
      <div className="back-link">
        <div className="container">
          <a className="back-link__link" href="#">
            Назад
            <svg
              className="back-link__icon"
              width={30}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-arrow-left" />
            </svg>
          </a>
        </div>
      </div>
      <Details {...product} />
      {
        (authorizationStatus === AuthorizationStatus.Auth) ?
          <NewReview />
          : ''
      }
      <ErrorComments />
      <Footer />
    </>
  );
}

export default ProductPage;
