type CardType = {
  title: string;
  previewImage: string;
  previewImageWebp: string;
  isNew: boolean;
  isFavorite: boolean;
}

function MainCard({ title, previewImage, previewImageWebp, isNew, isFavorite }: CardType): JSX.Element {
  return (
    <li className="random-main__item">
      <div className="card-item">
        <a className="card-item__img-link" href="#">
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
        </a>
        <button className={`card-item__favorites${(isFavorite) ? ' card-item__favorites--active' : ''}`} >
          <span className="visually-hidden">Добавить в избранное</span>
          <svg width={51} height={41} aria-hidden="true">
            <use xlinkHref="#icon-like" />
          </svg>
        </button>
        <a className="card-item__link" href="#">
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </a>
      </div>
    </li>
  );
}

export default MainCard;
