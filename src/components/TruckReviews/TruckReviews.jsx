import BookForm from '../BookForm/BookForm';
import { useSelector } from 'react-redux';
import { selectTruck } from '../../redux/trucks/selectors';
import s from './TruckReviews.module.css';

const TruckReviews = () => {
  const truck = useSelector(selectTruck);
  const {
    AC,
    engine,
    gallery,
    id,
    description,
    location,
    name,
    price,
    rating,
    transmission,
    kitchen,
    reviews,
    radio,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = truck;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.reviews}>
          {reviews?.length > 0 &&
            reviews.map((review, index) => (
              <div className={s.review} key={index}>
                <div className={s.rating}>
                  <div className={s.img}></div>
                  <div className={s.name}>
                    <p>{review.reviewer_name}</p>
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
