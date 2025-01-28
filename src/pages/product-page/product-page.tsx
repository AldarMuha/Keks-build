import { Link, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getIsProductLoading, getProduct, selectComments } from '../../store/site-data/selectors';
import { useEffect } from 'react';
import { fetchProduct, fetchReviews } from '../../store/action';
import Details from '../../components/details/details';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
//import ErrorComments from '../../components/error-comments/error-comments';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import NewComment from '../../components/new-comment/new-comment';
import Comment from '../../components/comment/comment';
import NoComments from '../../components/no-comments/no-comments';
import FilterSortComments from '../../components/filter-sort-comments/filter-sort-comments';

function ProductPage(): JSX.Element | null {
  const params = useParams();
  //const userStatusLoading = useAppSelector(getIsUserStatusLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const isProductLoading = useAppSelector(getIsProductLoading);
  const product = useAppSelector(getProduct);
  const comments = useAppSelector(selectComments);
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
          <Link className="back-link__link" to={AppRoute.Catalog}>
            Назад
            <svg
              className="back-link__icon"
              width={30}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-arrow-left" />
            </svg>
          </Link>
        </div>
      </div>
      <Details {...product} />
      {
        (authorizationStatus === AuthorizationStatus.Auth) ?
          <NewComment {...product} />
          : ''
      }
      {
        (comments.length > 0) ?
          <>
            <FilterSortComments {...product} />
            <section className="comments">
              <h2 className="visually-hidden">Список комментариев</h2>
              <div className="container">
                <div className="comments__wrapper">
                  {comments.map((comment) => (
                    <Comment key={comment.id} {...comment} />
                  ))}
                </div>
              </div>
            </section>
          </>
          : <NoComments />
      }
      <Footer />
    </>
  );
}

export default ProductPage;
