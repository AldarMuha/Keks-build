import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getIsProductLoading, getProduct } from '../../store/site-data/selectors';
import { useEffect } from 'react';
import { fetchProduct } from '../../store/action';
import Details from '../../components/details/details';

function ProductPage(): JSX.Element | null {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isProductLoading = useAppSelector(getIsProductLoading);
  const product = useAppSelector(getProduct);
  useEffect(() => {
    const { id } = params;
    if (id) {
      const parseId = id;
      dispatch(fetchProduct(parseId));
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
      <section className="review-form">
        <div className="container">
          <div className="review-form__wrapper">
            <h2 className="review-form__title">оставить отзыв</h2>
            <div className="review-form__form">
              <form action="#" method="post" autoComplete="off">
                <div className="review-form__inputs-wrapper">
                  <div className="custom-input">
                    <label>
                      <span className="custom-input__label">Достоинства</span>
                      <input
                        type="text"
                        name="advantages"
                        placeholder="Достоинства"
                        required
                      />
                    </label>
                  </div>
                  <div className="custom-input">
                    <label>
                      <span className="custom-input__label">Недостатки</span>
                      <input
                        type="text"
                        name="disadvantages"
                        placeholder="Недостатки"
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="review-form__submit-wrapper">
                  <div className="review-form__rating-wrapper">
                    <div className="input-star-rating">
                      <input
                        type="radio"
                        name="input-star-rating"
                        id="input-star-rating-5"
                        defaultValue={5}
                        aria-label="5 звезд"
                      />
                      <label htmlFor="input-star-rating-5">
                        <svg width={40} height={40} aria-hidden="true">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input
                        type="radio"
                        name="input-star-rating"
                        id="input-star-rating-4"
                        defaultValue={4}
                        aria-label="4 звезды"
                      />
                      <label htmlFor="input-star-rating-4">
                        <svg width={40} height={40} aria-hidden="true">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input
                        type="radio"
                        name="input-star-rating"
                        id="input-star-rating-3"
                        defaultValue={3}
                        aria-label="3 звезды"
                      />
                      <label htmlFor="input-star-rating-3">
                        <svg width={40} height={40} aria-hidden="true">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input
                        type="radio"
                        name="input-star-rating"
                        id="input-star-rating-2"
                        defaultValue={2}
                        aria-label="2 звезды"
                      />
                      <label htmlFor="input-star-rating-2">
                        <svg width={40} height={40} aria-hidden="true">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input
                        type="radio"
                        name="input-star-rating"
                        id="input-star-rating-1"
                        defaultValue={1}
                        aria-label="1 звезда"
                      />
                      <label htmlFor="input-star-rating-1">
                        <svg width={40} height={40} aria-hidden="true">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="review-form__button-wrapper">
                    <button className="btn review-form__button" type="submit">
                      Отправить отзыв
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="error-comments">
        <div className="container">
          <div className="error-comments__wrapper">
            <h2 className="error-comments__title">
              Не удалось загрузить комментарии
            </h2>
            <button className="btn error-comments__button" type="button">
              Попробовать ещё
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
