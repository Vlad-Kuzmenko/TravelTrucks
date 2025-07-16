import clsx from 'clsx';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <div className={s.wrapper}>
      <NavLink to="/" aria-label="Go to homepage">
        <p className={s.logo}>
          Travel<span className={s.logoStyle}>Trucks</span>
        </p>
      </NavLink>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/campers" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
