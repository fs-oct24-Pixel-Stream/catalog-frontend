import './ProductParamsSelects.scss';
import { ColorKey, COLORS } from '../../utils/types/colors';
import classNames from 'classnames';

type Params = {
  colorsAvailable: ColorKey[];
  capacityAvailable: string[];
  id: string;
  category: string;
  color: ColorKey;
  capacity: string;
  onColorChange: (color: ColorKey) => void;
  onCapasityChange: (capasity: string) => void;
};

export const ProductParamsSelects: React.FC<Params> = (params) => {
  const {
    colorsAvailable,
    capacityAvailable,
    category,
    color,
    capacity,
    onColorChange,
    onCapasityChange,
  } = params;

  return (
    <div className="available-options">
      <div className="available-options__color available-options__section">
        <div className="available-options__label-wrapper">
          <span className="available-options__label">Available colors</span>
        </div>

        <div>
          {colorsAvailable.map((colorOption) => (
            <button
              key={colorOption}
              className={classNames('available-options__color-button', {
                selected: color === colorOption,
              })}
              onClick={() => onColorChange(colorOption)}
            >
              <div
                style={{ backgroundColor: COLORS[colorOption] }}
                className="available-options__color-button--inner"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="available-options__capasity available-options__section">
        {category === 'accessories' ?
          <span className="available-options__label">Select size</span>
        : <span className="available-options__label">Select capacity</span>}

        <div>
          {capacityAvailable.map((capacityOption) => (
            <button
              key={capacityOption}
              className={classNames('available-options__capacity-button', {
                selected: capacity === capacityOption,
              })}
              onClick={() => onCapasityChange(capacityOption)}
            >
              {capacityOption.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
