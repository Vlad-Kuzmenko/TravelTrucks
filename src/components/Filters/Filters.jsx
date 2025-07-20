import { useDispatch, useSelector } from 'react-redux';
import Equipment from '../Equipment/Equipment';
import Location from '../Location/Location';
import s from './Filters.module.css';
import { useState } from 'react';
import { fetchQuery, fetchTrucks } from '../../redux/trucks/operations';
import {
  selectLocation,
  selectPage,
  selectSelectedBodyType,
  selectSelectedEquipment,
} from '../../redux/trucks/selectors';
import {
  setSelectedBodyType,
  setSelectedEquipment,
  setLocation,
  setPage,
  resetFiltersAndItems,
  setQueryPage,
} from '../../redux/trucks/slice';

const Filters = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const location = useSelector(selectLocation);
  const selectedEquipment = useSelector(selectSelectedEquipment);
  const selectedBodyType = useSelector(selectSelectedBodyType);

  const handleLocationChange = value => {
    dispatch(setLocation(value));
  };

  const handleSearch = () => {
    dispatch(setPage(1));
    dispatch(setQueryPage(1));

    const filters = {
      page: 1,
      location: location || undefined,
      form: selectedBodyType || undefined,
      equipment: selectedEquipment.length > 0 ? selectedEquipment : undefined,
      replace: true,
    };

    dispatch(fetchQuery(filters));
  };

  const handleEquipmentChange = newEquipment => {
    const updated = selectedEquipment.includes(newEquipment)
      ? selectedEquipment.filter(item => item !== newEquipment)
      : [...selectedEquipment, newEquipment];

    dispatch(setSelectedEquipment(updated));
  };

  const handleBodyTypeChange = bodyType => {
    const updated = selectedBodyType === bodyType ? '' : bodyType;
    dispatch(setSelectedBodyType(updated));
  };

  const handleClear = () => {
    dispatch(resetFiltersAndItems());
    dispatch(fetchTrucks(1));
  };

  return (
    <div className={s.wrapper}>
      <Location value={location} onChange={handleLocationChange} />
      <Equipment
        onEquipmentChange={handleEquipmentChange}
        selectedEquipment={selectedEquipment}
        selectedBodyType={selectedBodyType}
        onBodyTypeChange={handleBodyTypeChange}
      />
      <div className={s.btn}>
        <button className={s.link} onClick={handleSearch}>
          Search
        </button>
        <button className={s.link} onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
