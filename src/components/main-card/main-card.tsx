//import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
//import { Link } from 'react-router-dom';

type CardType = {
  id: string;
  title: string;
  previewImage: string;
  previewImageWebp: string;
  isNew: boolean;
  isFavorite: boolean;
}

function MainCard({ id, title, previewImage, previewImageWebp, isNew, isFavorite }: CardType): JSX.Element {

  return (
    <li className="random-main__item">
      <div className="card-item">
        <Link className="card-item__img-link" to={`${AppRoute.ProductPage}/${id}`}>
          <div className="card-item__img-wrapper">
            <picture>
              <source
                type="image/webp"
                srcSet={previewImageWebp}
              />
              <img
                src={previewImage}
                srcSet={previewImage}
                width={241}
                height={245}
                alt="Торт голубика."
              />
            </picture>
          </div>
          {isNew ? <span className="card-item__label">Новинка</span> : ''}
        </Link>
        <button className={`card-item__favorites${(isFavorite) ? ' card-item__favorites--active' : ''}`} >
          <span className="visually-hidden">Добавить в избранное</span>
          <svg width={51} height={41} aria-hidden="true">
            <use xlinkHref="#icon-like" />
          </svg>
        </button>
        <Link className="card-item__link" to={`${AppRoute.ProductPage}/${id}`}>
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </Link>
      </div>
    </li>
  );
}

export default MainCard;
