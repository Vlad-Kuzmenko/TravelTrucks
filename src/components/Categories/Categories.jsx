import clsx from 'clsx';
import s from './Categories.module.css';

const Categories = ({
  transmission,
  kitchen,
  engine,
  AC,
  radio,
  bathroom,
  TV,
  refrigerator,
  microwave,
  gas,
  water,
  className,
}) => {
  function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={clsx(s.wrapper, className)}>
      {transmission && (
        <span className={s.items}>
          <svg className={s.transmissionIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-diagram"></use>
          </svg>
          {capitalizeFirstLetter(transmission)}
        </span>
      )}

      {engine && (
        <span className={s.items}>
          <svg className={s.engineIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-fuel-pump"></use>
          </svg>
          {capitalizeFirstLetter(engine)}
        </span>
      )}

      {kitchen && (
        <span className={s.items}>
          <svg className={s.kitchenIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-cup-hot"></use>
          </svg>
          Kitchen
        </span>
      )}

      {AC && (
        <span className={s.items}>
          <svg className={s.acIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-wind"></use>
          </svg>
          AC
        </span>
      )}

      {radio && (
        <span className={s.items}>
          <svg className={s.radioIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-ui-radios"></use>
          </svg>
          Radio
        </span>
      )}

      {bathroom && (
        <span className={s.items}>
          <svg className={s.bathroomIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-ph_shower"></use>
          </svg>
          Bathroom
        </span>
      )}

      {TV && (
        <span className={s.items}>
          <svg className={s.tvIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-tv"></use>
          </svg>
          TV
        </span>
      )}

      {refrigerator && (
        <span className={s.items}>
          <svg className={s.refrigeratorIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-solar_fridge-outline"></use>
          </svg>
          Refrigerator
        </span>
      )}

      {microwave && (
        <span className={s.items}>
          <svg className={s.microwaveIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-lucide_microwave"></use>
          </svg>
          Microwave
        </span>
      )}

      {gas && (
        <span className={s.items}>
          <svg className={s.gasIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-hugeicons_gas-stove"></use>
          </svg>
          Gas
        </span>
      )}

      {water && (
        <span className={s.items}>
          <svg className={s.waterIcon} width="16" height="16">
            <use href="../../../sprite.svg#icon-ion_water-outline"></use>
          </svg>
          Water
        </span>
      )}
    </div>
  );
};

export default Categories;
