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
    id,
    transmission,
    kitchen,
    radio,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    bathroom,
    TV,
    refrigerator,
    microwave,
    gas,
    water,
  } = truck;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Categories
          transmission={transmission}
          engine={engine}
          AC={AC}
          radio={radio}
          kitchen={kitchen}
          bathroom={bathroom}
          TV={TV}
          refrigerator={refrigerator}
          microwave={microwave}
          gas={gas}
          water={water}
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
