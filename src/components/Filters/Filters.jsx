import Equipment from '../Equipment/Equipment';
import Location from '../Location/Location';
import Type from '../Type/Type';
import s from './Filters.module.css';

const Filters = () => {
  return (
    <div className={s.wrapper}>
      <Location />
      <p>Filters</p>
      <Equipment />
      <Type />
      <button>Search</button>
    </div>
  );
};

export default Filters;
