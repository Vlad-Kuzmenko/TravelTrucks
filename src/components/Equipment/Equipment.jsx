import clsx from 'clsx';
import s from './Equipment.module.css';

const Equipment = ({
  onEquipmentChange,
  selectedEquipment,
  onBodyTypeChange,
  selectedBodyType,
}) => {
  const handleEquipmentToggle = equipment => {
    onEquipmentChange(equipment);
  };

  const handleBodyTypeChange = bodyType => {
    onBodyTypeChange(bodyType);
  };

  const isSelected = equipment => selectedEquipment.includes(equipment);
  const isBodyTypeSelected = bodyType => selectedBodyType === bodyType;

  return (
    <div className={s.container}>
      <p className={s.title}>Filters</p>
      <div className={s.wrapper}>
        <p className={s.subtitle}>Vehicle equipment</p>
        <div className={s.divider}></div>
        <div className={s.equipments}>
          <div
            className={clsx(s.equipment, { [s.selected]: isSelected('AC') })}
            onClick={() => handleEquipmentToggle('AC')}
          >
            <svg className={s.heartIcon} width="32" height="32">
              <use href="../../../public/sprite.svg#icon-wind"></use>
            </svg>
            <p className={s.textIcon}>AC</p>
          </div>
          <div
            className={clsx(s.equipment, {
              [s.selected]: isSelected('automatic'),
            })}
            onClick={() => handleEquipmentToggle('automatic')}
          >
            <svg className={s.heartIcon} width="32" height="32">
              <use href="../../../public/sprite.svg#icon-diagram"></use>
            </svg>
            <p className={s.textIcon}>Automatic</p>
          </div>
          <div
            className={clsx(s.equipment, {
              [s.selected]: isSelected('kitchen'),
            })}
            onClick={() => handleEquipmentToggle('kitchen')}
          >
            <svg className={s.heartIcon} width="32" height="32">
              <use href="../../../public/sprite.svg#icon-cup-hot"></use>
            </svg>
            <p className={s.textIcon}>Kitchen</p>
          </div>
          <div
            className={clsx(s.equipment, { [s.selected]: isSelected('TV') })}
            onClick={() => handleEquipmentToggle('TV')}
          >
            <svg className={s.heartIcon} width="32" height="32">
              <use href="../../../public/sprite.svg#icon-tv"></use>
            </svg>
            <p className={s.textIcon}>TV</p>
          </div>
          <div
            className={clsx(s.equipment, {
              [s.selected]: isSelected('bathroom'),
            })}
            onClick={() => handleEquipmentToggle('bathroom')}
          >
            <svg className={s.heartIcon} width="32" height="32">
              <use href="../../../public/sprite.svg#icon-ph_shower"></use>
            </svg>
            <p className={s.textIcon}>Bathroom</p>
          </div>
        </div>
      </div>
      <div className={s.wrapper}>
        <p className={s.subtitle}>Vehicle type</p>
        <div className={s.divider}></div>
        <div className={s.equipments}>
          <div
            className={clsx(s.equipment, {
              [s.selected]: isBodyTypeSelected('panelTruck'),
            })}
            onClick={() => handleBodyTypeChange('panelTruck')}
          >
            <svg className={s.heartIcon} width="32" height="32">
              <use href="../../../public/sprite.svg#icon-bi_grid-1x2"></use>
            </svg>
            <p className={s.textIcon}>Van</p>
          </div>
          <div
            className={clsx(s.equipment, {
              [s.selected]: isBodyTypeSelected('fullyIntegrated'),
            })}
            onClick={() => handleBodyTypeChange('fullyIntegrated')}
          >
            <svg className={s.heartIcon} width="32" height="32">
              <use href="../../../public/sprite.svg#icon-bi_grid"></use>
            </svg>
            <p className={s.textIcon}>Fully Integrated</p>
          </div>
          <div
            className={clsx(s.equipment, {
              [s.selected]: isBodyTypeSelected('alcove'),
            })}
            onClick={() => handleBodyTypeChange('alcove')}
          >
            <svg className={s.heartIcon} width="32" height="32">
              <use href="../../../public/sprite.svg#icon-bi_grid-3x3-gap"></use>
            </svg>
            <p className={s.textIcon}>Alcove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
