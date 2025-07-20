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

  function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const addSpaceBeforeUnit = value => {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value.replace(/^([\d.]+)([a-zA-Z]+)$/, '$1 $2');
  };

  return (
    <div className={s.container}>
      <div className={s.wrapp}>
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
          className={s.wrapper}
        />
        <div className={s.details}>
          <p className={s.subTitle}>Vehicle details</p>
          <div className={s.divider}></div>
          <div className={s.detailWrap}>
            <div className={s.detail}>
              <p className={s.text}>Form</p>
              <p className={s.text}>{capitalizeFirstLetter(form)}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Length</p>
              <p className={s.text}>{addSpaceBeforeUnit(length)}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Width</p>
              <p className={s.text}>{addSpaceBeforeUnit(width)}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Height</p>
              <p className={s.text}>{addSpaceBeforeUnit(height)}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Tank</p>
              <p className={s.text}>{addSpaceBeforeUnit(tank)}</p>
            </div>
            <div className={s.detail}>
              <p className={s.text}>Consumption</p>
              <p className={s.text}>{addSpaceBeforeUnit(consumption)}</p>
            </div>
          </div>
        </div>
      </div>
      <BookForm />
    </div>
  );
};

export default TruckFeatures;
