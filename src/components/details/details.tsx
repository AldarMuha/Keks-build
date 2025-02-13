import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProduct, deleteFavorite, putFavorite } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { ProductId } from '../../types/types';
function Details({ id, title, price, weight, previewImageWebp, previewImage, isNew, description, rating, isFavorite, isOpen, onClick }: ProductId & { isOpen: boolean; onClick: (isOpen: boolean) => void }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  let descriptinShow = description.length > 140 ? description.slice(0, 140) : description;
  const showMoreHandler = () => {
    descriptinShow = description;
  };
  const likeClickHandler = () => {
    if (!isFavorite) {
      dispatch(putFavorite(id));
    } else {
      dispatch(deleteFavorite(id));
    }
    dispatch(fetchProduct(id));
  };
  const ratingStars = Array.from({ length: Math.round(rating) }, (_, i) => (
    <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true" key={i}>
      <use xlinkHref="#icon-star"></use>
    </svg>
  ));
  const toggleFormNewComment = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      if (isOpen) {
        onClick(false);
      } else {
        onClick(true);
      }
    } else {
      navigate(AppRoute.Login);
    }
  };
  return (
    <section className="item-details item-details--form-open">
      <div className="container">
        <div className="item-details__wrapper">
          <div className="item-details__top-wrapper">
            <h2 className="item-details__name">{title}</h2>
            <span className="item-details__price">{price} р</span>
          </div>
          <div className="item-details__weight-wrapper">
            <span className="item-details__weight">{weight} грамм</span>
          </div>
          <div className="item-details__bottom-wrapper">
            <div className="item-details__image-wrapper">
              <picture>
                <source
                  type="image/webp"
                  srcSet={previewImageWebp}
                />
                <img
                  src={previewImage}
                  width={241}
                  height={245}
                  alt="Чизкейк лимонный"
                />
              </picture>
              {isNew ? <span className="item-details__label">Новинка</span> : ''}
            </div>
            <div className="item-details__review-wrapper">
              <div className="star-rating star-rating--big">
                {
                  ratingStars
                }
                <span className="star-rating__count">{Math.round(rating)}</span>
              </div>
              <div className="item-details__text-wrapper">
                <span className="item-details__text">
                  {descriptinShow}
                </span>
                {
                  (description.length > 140)
                    ?
                    <button className="item-details__more" onClick={showMoreHandler}>
                      <span className="visually-hidden">Читать полностью</span>
                      <svg width={27} height={17} aria-hidden="true">
                        <use xlinkHref="#icon-more" />
                      </svg>
                    </button>
                    : ''
                }
              </div>
              <div className="item-details__button-wrapper">
                {(authorizationStatus === AuthorizationStatus.Auth)
                  ?
                  <button className={`item-details__like-button${isFavorite ? ' item-details__like-button--active' : ''}`} onClick={likeClickHandler}>
                    <svg width={45} height={37} aria-hidden="true">
                      <use xlinkHref="#icon-like" />
                    </svg>
                    <span className="visually-hidden">Понравилось</span>
                  </button>
                  : ''}
                <button className="btn btn--second" type="button" onClick={toggleFormNewComment}>
                  {isOpen ? 'Отменить отзыв' : 'Оставить отзыв'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
