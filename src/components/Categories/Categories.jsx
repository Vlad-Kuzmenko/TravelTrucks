import s from './Categories.module.css';

const Categories = ({ transmission, kitchen, engine, AC, radio }) => {
  function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={s.wrapper}>
      <span className={s.items}>
        <svg className={s.transmissionIcon} width="16" height="16">
          <use href="../../../public/sprite.svg#icon-diagram"></use>
        </svg>
        {capitalizeFirstLetter(transmission)}
      </span>
      <span className={s.items}>
        <svg className={s.engineIcon} width="16" height="16">
          <use href="../../../public/sprite.svg#icon-fuel-pump"></use>
        </svg>
        {capitalizeFirstLetter(engine)}
      </span>
      {kitchen && (
        <span className={s.items}>
          <svg className={s.kitchenIcon} width="16" height="16">
            <use href="../../../public/sprite.svg#icon-ph_shower"></use>
          </svg>
          {kitchen && 'Kitchen'}
        </span>
      )}
      <span className={s.items}>
        <svg className={s.acIcon} width="16" height="16">
          <use href="../../../public/sprite.svg#icon-wind"></use>
        </svg>
        {AC && 'AC'}
      </span>
      {radio && (
        <span className={s.items}>
          <svg className={s.radioIcon} width="16" height="16">
            <use href="../../../public/sprite.svg#icon-ui-radios"></use>
          </svg>
          {radio && 'Radio'}
        </span>
      )}
    </div>
  );
};

export default Categories;
