import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import s from './Home.module.css';
import hero1x from '../../img/hero/hero_x1.jpg';
import hero2x from '../../img/hero/hero_x2.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrucks } from '../../redux/trucks/slice';
import { useEffect } from 'react';
import { fetchTrucks } from '../../redux/trucks/operations';

const Home = () => {
  const isRetina = window.devicePixelRatio >= 2;
  const bgImage = isRetina ? hero2x : hero1x;

  const dispatch = useDispatch();
  const trucks = useSelector(selectTrucks);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);
  console.log(trucks);
  return (
    <>
      <Header />
      <Section className={s.section}>
        <div className={s.heroBlock}>
          <div
            className={s.heroImage}
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <Container>
              <Hero />
            </Container>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
