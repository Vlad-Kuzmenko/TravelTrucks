import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import s from './Home.module.css';
import hero1x from '../../img/hero/hero_x1.jpg';
import hero2x from '../../img/hero/hero_x2.jpg';

const Home = () => {
  const isRetina = window.devicePixelRatio >= 2;
  const bgImage = isRetina ? hero2x : hero1x;

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
