import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import s from './CatalogDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTruck } from '../../redux/trucks/operations';
import { Outlet, useParams } from 'react-router-dom';
import TruckInfo from '../../components/TruckInfo/TruckInfo';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import FullData from '../../components/FullData/FullData';
import Loader from '../../components/Loader/Loader';
import { selectLoading } from '../../redux/trucks/selectors';

const CatalogDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTruck(id));
  }, [dispatch]);

  return (
    <div>
      <Header />
      {isLoading && <Loader />}
      <Section>
        <Container>
          <TruckInfo />
        </Container>
      </Section>
      <Section>
        <Container>
          <FullData />
          <Outlet />
        </Container>
      </Section>
    </div>
  );
};

export default CatalogDetails;
