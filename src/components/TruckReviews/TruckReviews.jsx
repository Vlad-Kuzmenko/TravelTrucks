import BookForm from '../BookForm/BookForm';
import { useSelector } from 'react-redux';
import { selectTruck } from '../../redux/trucks/selectors';
import s from './TruckReviews.module.css';

const TruckReviews = () => {
  const truck = useSelector(selectTruck);
  const { reviews } = truck;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.reviews}>
          {reviews?.length > 0 &&
            reviews.map((review, index) => (
              <div className={s.review} key={index}>
                <div className={s.rating}>
                  <div className={s.img}>{review.reviewer_name[0]}</div>
                  <div className={s.nameWrap}>
                    <div className={s.name}>
                      <p>{review.reviewer_name}</p>
                      <div className={s.stars}>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={s.starIcon}
                            width="16"
                            height="16"
                            fill={
                              i < review.reviewer_rating ? '#FFC531' : '#F2F4F7'
                            }
                          >
                            <use href="/sprite.svg#icon-star" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.description}>{review.comment}</div>
              </div>
            ))}
        </div>
      </div>
      <BookForm />
    </div>
  );
};

export default TruckReviews;
