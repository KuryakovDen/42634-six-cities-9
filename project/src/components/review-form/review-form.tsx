import React, {Fragment, useState} from 'react';
import {MAX_REVIEW_STARS_COUNT, ValidReviewTextLength} from '../../const';

type ReviewForm = {
  rating: null | number;
  review: string;
};

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<ReviewForm>({
    rating: null,
    review: '',
  });

  const ratingStars = new Array(MAX_REVIEW_STARS_COUNT).fill(null).map((el, index) => el = index + 1).reverse();
  const setField = ({target}: any) => setFormData((prevState) => ({...prevState, [target.name]: target.value}));

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratingStars.map((ratingStar) => (
            <Fragment key={ratingStar}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={ratingStar}
                id={`${ratingStar}-stars`}
                type="radio"
                onChange={setField}
              />
              <label htmlFor={`${ratingStar}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33"><use xlinkHref="#icon-star" /></svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={ValidReviewTextLength.Min}
        maxLength={ValidReviewTextLength.Max}
        onChange={setField}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">{ValidReviewTextLength.Min} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.review.length < ValidReviewTextLength.Min || formData.rating === null}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
