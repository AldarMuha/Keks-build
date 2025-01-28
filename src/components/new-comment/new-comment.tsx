import { useAppDispatch } from '../../hooks';
import type { NewReview, Product } from '../../types/types';
import { fetchReviews, postReview } from '../../store/action';
import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

const STARS_COUNT = 5;

function NewComment({ id }: Product): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [positiveText, setPositiveText] = useState<string>('');
  const [negativeText, setNegativeText] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const handlePositiveTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPositiveText(e.target.value);
  };
  const handleNegativeTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNegativeText(e.target.value);
  };
  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };
  const onFormSubmit = (formData: Omit<NewReview, 'id'>) => {
    dispatch(postReview({ id, ...formData }));
  };
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit({
      positive: positiveText,
      negative: negativeText,
      rating,
    });
    dispatch(fetchReviews(id));
    setPositiveText('');
    setNegativeText('');
    setRating(0);
    navigate(`${AppRoute.ProductPage}/${id}`);
  };
  return (
    <section className="review-form">
      <div className="container">
        <div className="review-form__wrapper">
          <h2 className="review-form__title">оставить отзыв</h2>
          <div className="review-form__form">
            <form action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit}>
              <div className="review-form__inputs-wrapper">
                <div className="custom-input">
                  <label>
                    <span className="custom-input__label">Достоинства</span>
                    <input
                      type="text"
                      name="advantages"
                      placeholder="Достоинства"
                      required
                      value={positiveText}
                      onChange={handlePositiveTextChange}
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
                      value={negativeText}
                      onChange={handleNegativeTextChange}
                    />
                  </label>
                </div>
              </div>
              <div className="review-form__submit-wrapper">
                <div className="review-form__rating-wrapper">
                  <div className="input-star-rating">
                    {Array.from({ length: STARS_COUNT }, (_, i) => (
                      <Fragment key={`Star ${STARS_COUNT - i}`}>
                        <input
                          type="radio"
                          name="input-star-rating"
                          id={`input-star-rating-${STARS_COUNT - i}`}
                          defaultValue={STARS_COUNT - i}
                          checked={STARS_COUNT - i === rating}
                          onChange={handleRatingChange}
                        />
                        <label htmlFor={`input-star-rating-${STARS_COUNT - i}`}>
                          <svg width={40} height={40} aria-hidden="true">
                            <use xlinkHref="#icon-star" />
                          </svg>
                        </label>
                      </Fragment>
                    ))}
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
  );
}

export default NewComment;
