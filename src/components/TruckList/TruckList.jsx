import { useSelector } from 'react-redux';
import s from './TruckList.module.css';
import { selectTrucks } from '../../redux/trucks/slice';
import Truck from '../Truck/Truck';

const TruckList = () => {
  const trucks = useSelector(selectTrucks);

  console.log(trucks);

  return (
    <div className={s.wrapper}>
      {trucks.map(truck => (
        <Truck key={truck.id} truck={truck} />
      ))}
    </div>
  );
};

export default TruckList;
