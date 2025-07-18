import s from './Location.module.css';

const Location = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Location</p>
      <form className={s.form}>
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
          placeholder="City"
        />
        <div className={s.map}>
          <svg className={s.mapIcon} width="20" height="20">
            <use href="../../../public/sprite.svg#icon-map"></use>
          </svg>
        </div>
      </form>
    </div>
  );
};

export default Location;
