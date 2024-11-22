import { Link } from 'react-router-dom';
import { Product } from '../../types/types';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { deleteFavorite, fetchProducts, putFavorite, fetchFavorite } from '../../store/action';

function CatalogCard({ id, title, previewImage, previewImageWebp, isNew, isFavorite, price }: Product): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const favoritesButtonClickHandler = () => {
    if (!isFavorite) {
      dispatch(putFavorite(id));
    } else {
      dispatch(deleteFavorite(id));
    }
    dispatch(fetchFavorite());
    dispatch(fetchProducts());
  };
  return (
    <li className="catalog__item">
      <div className="card-item card-item--big">
        <Link className="card-item__img-link" to={`${AppRoute.ProductPage}/${id}`}>
          <div className="card-item__img-wrapper">
            <picture>
              <source
                type="image/webp"
                srcSet={previewImageWebp}
              />
              <img
                src={previewImage}
                width={326}
                height={332}
                alt="Торт голубика."
              />
            </picture>
          </div>
          {isNew ? <span className="card-item__label">Новинка</span> : ''}
        </Link>
        {
          (authorizationStatus === AuthorizationStatus.Auth) ?
            <button className={`card-item__favorites ${(isFavorite) ? ' card-item__favorites--active' : ''}`} onClick={favoritesButtonClickHandler}>
              <span className="visually-hidden">Добавить в избранное</span>
              <svg width={51} height={41} aria-hidden="true">
                <use xlinkHref="#icon-like" />
              </svg>
            </button>
            : ''
        }
        <span className="card-item__price">{price}</span>
        <a className="card-item__link" href="#">
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </a>
      </div>
    </li>
  );
}

export default CatalogCard;
