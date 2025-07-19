import { useDispatch, useSelector } from 'react-redux';
import Equipment from '../Equipment/Equipment';
import Location from '../Location/Location';
import s from './Filters.module.css';
import { useState } from 'react';
import { fetchQuery } from '../../redux/trucks/operations';
import { selectPage } from '../../redux/trucks/selectors';
import {
  setSelectedBodyType,
  setSelectedEquipment,
  setLocation,
  setPage,
} from '../../redux/trucks/slice';

const Filters = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const [location, setLocationState] = useState('');
  const [selectedEquipment, setEquipment] = useState([]);
  const [selectedBodyType, setBodyType] = useState('');

  const handleLocationChange = value => {
    setLocationState(value);
    dispatch(setLocation(value));
  };

  const handleSearch = () => {
    dispatch(setPage(1));

    const filters = {
      page: 1,
      location: location || undefined,
      form: selectedBodyType || undefined,
      equipment: selectedEquipment.length > 0 ? selectedEquipment : undefined,
    };

    dispatch(fetchQuery(filters));
  };

  const handleEquipmentChange = newEquipment => {
    setEquipment(prevState =>
      prevState.includes(newEquipment)
        ? prevState.filter(item => item !== newEquipment)
        : [...prevState, newEquipment]
    );
    dispatch(setSelectedEquipment(selectedEquipment));
  };

  const handleBodyTypeChange = bodyType => {
    if (selectedBodyType === bodyType) {
      setBodyType(null);
    } else {
      setBodyType(bodyType);
    }
    dispatch(setSelectedBodyType(bodyType));
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
      <button className={s.link} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
