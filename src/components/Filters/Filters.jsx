import Equipment from '../Equipment/Equipment';
import Location from '../Location/Location';
import s from './Filters.module.css';

const Filters = () => {
  return (
    <div className={s.wrapper}>
      <Location />
      <Equipment />
      <button className={s.link}>Search</button>
    </div>
  );
};

export default Filters;
