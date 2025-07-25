import { useSelector } from 'react-redux';
import s from './TruckList.module.css';
import Truck from '../Truck/Truck';
import { selectTrucks } from '../../redux/trucks/selectors';

const TruckList = () => {
  const trucks = useSelector(selectTrucks);

  return (
    <>
      <ul className={s.wrapper}>
        {trucks.map(truck => (
          <Truck key={truck.id} truck={truck} />
        ))}
      </ul>
    </>
  );
};

export default TruckList;
