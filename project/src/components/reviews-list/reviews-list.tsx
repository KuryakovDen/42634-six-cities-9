import React from 'react';
import {Review} from '../../types/review';
import {MAX_REVIEW_COUNT, RATING_COEFFICIENT} from '../../const';
import {getFormattedDate} from '../../util';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const sortedReviews = reviews
    .sort((prevReview, nextReview) => {
      const prevDate = new Date(prevReview.date);
      const nextDate = new Date(nextReview.date);

      if (prevDate > nextDate) {
        return -1;
      }

      return prevDate < nextDate ? 1 : 0;
    });

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortedReviews
            .slice(0, MAX_REVIEW_COUNT)
            .map((review) => (
              <li className="reviews__item" key={review.id}>
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                  </div>
                  <span className="reviews__user-name">{review.user.name}</span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{width: `${Math.round(review.rating) * RATING_COEFFICIENT}%`}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    {review.comment}
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">{getFormattedDate(review.date)}</time>
                </div>
              </li>
            ))
        }
      </ul>
    </>
  );
}

export default ReviewsList;
