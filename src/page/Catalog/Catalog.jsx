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
} from '../../redux/trucks/selectors';
import { setPage } from '../../redux/trucks/slice';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const trucks = useSelector(selectTrucks);
  const total = useSelector(selectTotal);
  const pages = useSelector(selectPage);
  const selectedBodyType = useSelector(selectSelectedBodyType);
  const selectedEquipment = useSelector(selectSelectedEquipment);
  const location = useSelector(selectLocation);

  const [page, setPageState] = useState(pages);
  const [queryPage, setQueryPageState] = useState(pages);

  useEffect(() => {
    dispatch(fetchTrucks(page));
    dispatch(setPage(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    const queryParams = {
      page: queryPage + 1, // додаємо нову сторінку
      location: location || undefined,
      form: selectedBodyType || undefined,
      equipment: selectedEquipment.length > 0 ? selectedEquipment : undefined,
    };

    if (location || selectedBodyType || selectedEquipment.length > 0) {
      dispatch(fetchQuery(queryParams));
      setQueryPageState(prev => prev + 1);
    } else {
      setPageState(prev => prev + 1);
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
    </div>
  );
};

export default Catalog;
