import { NavLink } from 'react-router-dom';
import s from './FullData.module.css';
import clsx from 'clsx';

const FullData = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.linksList}>
        <NavLink className={buildLinkClass} to={'features'}>
          Features
        </NavLink>
        <NavLink className={buildLinkClass} to={'reviews'}>
          Reviews
        </NavLink>
      </div>
      <div className={s.divider}></div>
    </div>
  );
};

export default FullData;
