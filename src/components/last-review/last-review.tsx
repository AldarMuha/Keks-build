import dayjs from 'dayjs';
import type { Review } from '../../types/types';

function LastReview({ isoDate, user, positive, negative }: Review): JSX.Element {
  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        <div className="review">
          <div className="review__inner-wrapper review__inner-wrapper--border">
            <time className="review__date" dateTime={isoDate}>
              {dayjs(isoDate).format('DD.MM')}
            </time>
            <span className="review__author">Уважаемый(-ая) {user.name}</span>
            <div className="star-rating">
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
            </div>
            <div className="review__text-wrapper">
              <p className="review__text">
                {positive}
              </p>
              <p className="review__text">
                {negative}
              </p>
            </div>
            <div className="review__image-wrapper">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/review-1.webp, img/content/review-1@2x.webp 2x"
                />
                <img
                  src={user.avatarUrl}
                  //srcSet="img/content/review-1@2x.jpg 2x"
                  width={162}
                  height={162}
                  alt="Кот"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LastReview;
