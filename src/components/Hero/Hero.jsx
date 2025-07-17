import { NavLink } from 'react-router-dom';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <div>
      <div className={s.titles}>
        <div className={s.titlesWrapper}>
          <p className={s.title}>Campers of your dreams</p>
          <p className={s.subTitle}>
            You can find everything you want in our catalog
          </p>
        </div>
        <nav>
          <NavLink to="/catalog" className={s.link}>
            View Now
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
