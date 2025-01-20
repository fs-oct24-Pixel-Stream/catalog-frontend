import classNames from 'classnames';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';
import './TechSpecs.scss';
import { useTranslation } from 'react-i18next';

type Props = {
  device: ProductDeviceType;
  category: string;
  variant: 'full' | 'short';
};

export const TechSpecs: React.FC<Props> = ({ device, category, variant }) => {
  const { t } = useTranslation();
  const specs = {
    'Screen': device.screen,
    'Resolution': device.resolution,
    'Processor': device.processor,
    'RAM': device.ram,
    'Built in memory': device.capacity.toUpperCase() || null,
    'Size': device.capacity.toUpperCase() || null,
    'Camera': device.camera,
    'Zoom': device.zoom,
    'Cell': device.cell,
  };

  const shortSpecs = ['Screen', 'Resolution', 'Processor', 'RAM'];

  if (category === 'accessories') {
    specs['Built in memory'] = null;
  }

  if (category === 'tablets' || category === 'phones') {
    specs['Size'] = null;
  }

  if (specs['Camera']) {
    const camsCount = specs['Camera'].split('+').length;

    switch (camsCount) {
      case 2:
        specs['Camera'] = `${specs['Camera']} (Dual)`;
        break;

      case 3:
        specs['Camera'] = `${specs['Camera']} (Triple)`;
        break;

      default:
        break;
    }
  }

  if (specs['Cell']) {
    specs['Cell'] = specs['Cell'].map((cell, index) => {
      if (index === specs['Cell'].length - 1) {
        return cell;
      } else {
        return `${cell}, `;
      }
    });
  }

  const specsToRender =
    variant === 'short' ?
      Object.fromEntries(Object.entries(specs).filter(([key]) => shortSpecs.includes(key)))
    : specs;

  return (
    <div className={classNames('tech-specs', { 'tech-specs--short': variant === 'short' })}>
      <ul className="tech-specs__list">
        {Object.entries(specsToRender).map((spec) => {
          const key = spec[0];
          let val = spec[1];
          if (val) {
            return (
              <li
                className="tech-specs__item"
                key={key}
              >
                <div className="tech-specs__item--name">{t(key)}</div>

                <div className="tech-specs__item--value">{val}</div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
