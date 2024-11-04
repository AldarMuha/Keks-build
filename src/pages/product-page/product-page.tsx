function ProductPage(): JSX.Element {
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
      <section className="item-details item-details--form-open">
        <div className="container">
          <div className="item-details__wrapper">
            <div className="item-details__top-wrapper">
              <h2 className="item-details__name">Чизкейк Лимонный</h2>
              <span className="item-details__price">4 100 р</span>
            </div>
            <div className="item-details__weight-wrapper">
              <span className="item-details__weight">1 300 грамм</span>
            </div>
            <div className="item-details__bottom-wrapper">
              <div className="item-details__image-wrapper">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/content/lemon-pie.webp, img/content/lemon-pie@2x.webp 2x"
                  />
                  <img
                    src="img/content/lemon-pie.jpg"
                    srcSet="img/content/lemon-pie@2x.jpg 2x"
                    width={241}
                    height={245}
                    alt="Чизкейк лимонный"
                  />
                </picture>
                <span className="item-details__label">Новинка</span>
              </div>
              <div className="item-details__review-wrapper">
                <div className="star-rating star-rating--big">
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <span className="star-rating__count">26</span>
                </div>
                <div className="item-details__text-wrapper">
                  <span className="item-details__text">
                    Цитрусовый десерт с&nbsp;тонким сливочным вкусом, лёгкой
                    свежестью и&nbsp;низким содержанием калорий&nbsp;сд
                  </span>
                  <button className="item-details__more">
                    <span className="visually-hidden">Читать полностью</span>
                    <svg width={27} height={17} aria-hidden="true">
                      <use xlinkHref="#icon-more" />
                    </svg>
                  </button>
                </div>
                <div className="item-details__button-wrapper">
                  <button className="item-details__like-button">
                    <svg width={45} height={37} aria-hidden="true">
                      <use xlinkHref="#icon-like" />
                    </svg>
                    <span className="visually-hidden">Понравилось</span>
                  </button>
                  <button className="btn btn--second" type="button">
                    Отменить отзыв
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                        required=""
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
                        required=""
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
