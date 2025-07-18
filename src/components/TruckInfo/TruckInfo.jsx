import { useSelector } from 'react-redux';
import s from './TruckInfo.module.css';
import { selectTruck } from '../../redux/trucks/selectors';

const TruckInfo = () => {
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
  } = truck;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.ratings}>
          <div className={s.star}>
            <div className={s.starWrap}>
              <svg className={s.starIcon} width="16" height="16">
                <use href="../../../public/sprite.svg#icon-star"></use>
              </svg>
            </div>

            <div className={s.rating}>
              {rating}({reviews?.length || 0} Reviews)
            </div>
          </div>
          <div className={s.location}>
            <div className={s.map}>
              <svg className={s.mapIcon} width="16" height="16">
                <use href="../../../public/sprite.svg#icon-map"></use>
              </svg>
            </div>
            <div>{location}</div>
          </div>
        </div>
        <div className={s.prices}>
          <p className={s.price}>€{price}.00</p>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.gallery}>
          {gallery?.length > 0 &&
            gallery.map((photo, index) => (
              <div className={s.img} key={index}>
                <img src={photo.thumb} alt="Campers" />
              </div>
            ))}
        </div>
      </div>
      <div className={s.wrapper}>
        <p className={s.describe}>{description}</p>
      </div>
    </div>
  );
};

export default TruckInfo;
