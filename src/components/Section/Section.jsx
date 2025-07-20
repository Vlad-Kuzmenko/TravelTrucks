import clsx from 'clsx';
import s from './Section.module.css';

const Section = ({ children, className, style }) => {
  return (
    <section className={clsx(s.section, className)} style={style}>
      {children}
    </section>
  );
};

export default Section;
