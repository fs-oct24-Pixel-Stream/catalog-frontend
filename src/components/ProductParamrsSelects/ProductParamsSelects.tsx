import './ProductParamsSelects.scss';

type Params = {
  colorsAvailable: string[];
  capacityAvailable: string[];
  id: string;
  category: string;
};

export const ProductParamrsSelects: React.FC<Params> = ({
  colorsAvailable,
  capacityAvailable,
  id,
  category,
}) => {
  return (
    <div className="available-options">
      <div className="available-options__color available-options__section">
        <div className="available-options__label-wrapper">
          <span className="available-options__label">Available colors</span>
          <span className="available-options__id">{`ID: ${id}`}</span>
        </div>

        <div>
          {colorsAvailable.map((color) => (
            <button
              key={color}
              className="available-options__color-button"
            >
              <div
                style={{ backgroundColor: `${color}` }}
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
          {capacityAvailable.map((capacity) => (
            <button
              key={capacity}
              className="available-options__capacity-button"
            >
              {capacity}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
