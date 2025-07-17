import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import TruckList from '../../components/TruckList/TruckList';
import s from './Catalog.module.css';
import { useEffect } from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import { fetchTrucks } from '../../redux/trucks/operations';
import Filters from '../../components/Filters/Filters';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Section>
        <Container className={s.wrapper}>
          <Filters />
          <TruckList />
        </Container>
      </Section>
    </div>
  );
};

export default Catalog;
