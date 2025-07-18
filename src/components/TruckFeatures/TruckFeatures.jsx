import { useSelector } from 'react-redux';
import s from './TruckFeatures.module.css';
import { selectTruck } from '../../redux/trucks/selectors';
import Categories from '../Categories/Categories';
import BookForm from '../BookForm/BookForm';

const TruckFeatures = () => {
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

  console.log(truck);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Categories
          transmission={transmission}
          kitchen={kitchen}
          engine={engine}
          AC={AC}
          radio={radio}
        />
        <div className={s.details}>
          <p className={s.subTitle}>Vehicle details</p>
          <div className={s.divider}></div>
          <div className={s.detailWrap}>
            <div className={s.detail}>
              <p className={s.text}>Form</p>
              <p className={s.text}>{form}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Length</p>
              <p className={s.text}>{length}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Width</p>
              <p className={s.text}>{width}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Height</p>
              <p className={s.text}>{height}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Tank</p>
              <p className={s.text}>{tank}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Consumption</p>
              <p className={s.text}>{consumption}</p>
            </div>
          </div>
        </div>
      </div>
      <BookForm />
    </div>
  );
};

export default TruckFeatures;
