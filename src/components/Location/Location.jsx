import s from './Location.module.css';

const Location = ({ value, onChange }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Location</p>
      <form className={s.form} onSubmit={e => e.preventDefault()}>
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
          placeholder="City"
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
        />
        <div className={s.map}>
          <svg className={s.mapIcon} width="20" height="20">
            <use href="../../../sprite.svg#icon-map"></use>
          </svg>
        </div>
      </form>
    </div>
  );
};

export default Location;
