import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import TruckList from '../../components/TruckList/TruckList';
import s from './Catalog.module.css';
import { useEffect, useState } from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import { fetchQuery, fetchTrucks } from '../../redux/trucks/operations';
import Filters from '../../components/Filters/Filters';
import Loader from '../../components/Loader/Loader';
import {
  selectLoading,
  selectTrucks,
  selectTotal,
  selectPage,
  selectSelectedEquipment,
  selectSelectedBodyType,
  selectLocation,
  selectError,
} from '../../redux/trucks/selectors';
import { setPage, setQueryPage } from '../../redux/trucks/slice';
import { toast, ToastContainer } from 'react-toastify';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const trucks = useSelector(selectTrucks);
  const total = useSelector(selectTotal);
  const pages = useSelector(selectPage);
  const selectedBodyType = useSelector(selectSelectedBodyType);
  const selectedEquipment = useSelector(selectSelectedEquipment);
  const location = useSelector(selectLocation);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const queryPage = useSelector(state => state.trucks.queryPage);

  useEffect(() => {
    const hasFilters =
      !!location || !!selectedBodyType || selectedEquipment.length > 0;
    if (!hasFilters) {
      dispatch(fetchTrucks(page));
      dispatch(setPage(page));
    }
  }, [dispatch, page, location, selectedBodyType, selectedEquipment]);

  const handleLoadMore = () => {
    const hasFilters =
      !!location || !!selectedBodyType || selectedEquipment.length > 0;

    if (hasFilters) {
      dispatch(
        fetchQuery({
          page: queryPage + 1,
          location: location || undefined,
          form: selectedBodyType || undefined,
          equipment:
            selectedEquipment.length > 0 ? selectedEquipment : undefined,
          replace: false,
        })
      );
      dispatch(setQueryPage(queryPage + 1));
    } else {
      dispatch(fetchTrucks(page + 1));
      dispatch(setPage(page + 1));
    }
  };

  const isEnd = trucks.length >= total;

  return (
    <div>
      <Header />
      {isLoading && <Loader />}
      <Section>
        <Container className={s.wrapper}>
          <Filters />
          <div className={s.wrapp}>
            <TruckList />
            {!isEnd && (
              <div className={s.loadMoreWrapper}>
                <button className={s.loadMoreBtn} onClick={handleLoadMore}>
                  Load more
                </button>
              </div>
            )}
          </div>
        </Container>
      </Section>
      <ToastContainer />
    </div>
  );
};

export default Catalog;
