import dayjs from 'dayjs';
import { Review } from '../../types/types';

function Comment({ isoDate, user, positive, negative, rating }: Review): JSX.Element {
  const ratingStars = Array.from({ length: rating }, (_, i) => (
    <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true" key={i}>
      <use xlinkHref="#icon-star"></use>
    </svg>
  ));
  return (
    <div className="review">
      <div className="review__inner-wrapper">
        <time className="review__date" dateTime={isoDate}>{dayjs(isoDate).format('DD.MM')}</time><span className="review__author">Уважаемый(-ая) {user.name}</span>
        <div className="star-rating">
          {
            ratingStars
          }
        </div>
        <div className="review__text-wrapper">
          <p className="review__text">{positive}</p>
          <p className="review__text">{negative}</p>
        </div>
        <div className="review__image-wrapper">
          <img src={user.avatarUrl} width="162" height="162" alt="Кот" />
        </div>
      </div>
    </div>
  );
}

export default Comment;
