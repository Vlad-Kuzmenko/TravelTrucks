import { NavLink } from 'react-router-dom';
import s from './Truck.module.css';
import Categories from '../Categories/Categories';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const Truck = ({ truck }) => {
  const {
    AC,
    engine,
    gallery,
    id,
    description,
    location,
    name,
    price,
    rating,
    transmission,
    kitchen,
    reviews,
  } = truck;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(id)) {
      const updatedFavorites = favorites.filter(favId => favId !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className={s.wrapper}>
      <div
        className={s.img}
        style={{ backgroundImage: `url(${gallery[0].thumb})` }}
      ></div>
      <div className={s.parameters}>
        <div className={s.titles}>
          <p className={s.name}>{name}</p>
          <div className={s.prices}>
            <p className={s.price}>€{price}.00</p>
            <div className={s.heart} onClick={toggleFavorite}>
              <svg
                className={clsx(s.heartIcon, { [s.favorite]: isFavorite })}
                width="26"
                height="24"
              >
                <use href="../../../public/sprite.svg#icon-heart"></use>
              </svg>
            </div>
          </div>
        </div>
        <div className={s.parametersWrap}>
          <div className={s.ratings}>
            <div className={s.star}>
              <div className={s.starWrap}>
                <svg className={s.starIcon} width="16" height="16">
                  <use href="../../../public/sprite.svg#icon-star"></use>
                </svg>
              </div>

              <div className={s.rating}>
                {rating}({reviews?.length || 0} Reviews)
              </div>
            </div>
            <div className={s.location}>
              <div className={s.map}>
                <svg className={s.mapIcon} width="16" height="16">
                  <use href="../../../public/sprite.svg#icon-map"></use>
                </svg>
              </div>
              <div>{location}</div>
            </div>
          </div>
          <p className={s.description} title={description}>
            {description}
          </p>
          <div className={s.categories}>
            <Categories
              transmission={transmission}
              kitchen={kitchen}
              engine={engine}
              AC={AC}
            />
          </div>
          <nav>
            <NavLink to={`/catalog/${id}`} className={s.link}>
              Show more
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Truck;
