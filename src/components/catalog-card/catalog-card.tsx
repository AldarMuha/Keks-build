import { Link } from 'react-router-dom';
import { Product } from '../../types/types';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
//import { useState } from 'react';

function CatalogCard({ id, title, previewImage, previewImageWebp, isNew, isFavorite, price, onFavoriteToggle }: Product & { onFavoriteToggle: (id: string) => void }): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  //const isFavoriteProduct = useState()
  const favoritesButtonClickHandler = () => {
    onFavoriteToggle(id);
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
        <span className="card-item__price">{price} р</span>
        <Link className="card-item__link" to={`${AppRoute.ProductPage}/${id}`}>
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </Link>
      </div>
    </li>
  );
}

export default CatalogCard;
