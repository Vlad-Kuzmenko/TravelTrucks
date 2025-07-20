import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import s from './NotFound.module.css';
import { useEffect, useState } from 'react';

const NotFound = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1200); // після анімації
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section className={s.section}>
      {!showContent && <div className={s.screenCrack}></div>}

      {showContent && (
        <div className={s.backgroundOverlay}>
          <Container>
            <div className={s.wrapper}>
              <h1 className={s.title}>404</h1>
              <p className={s.text}>Oops! Page not found.</p>
              <p className={s.subtext}>
                The page you’re looking for doesn’t exist or was moved.
              </p>
              <Link className={s.button} to="/">
                Go Home
              </Link>
            </div>
          </Container>
        </div>
      )}
    </Section>
  );
};

export default NotFound;
