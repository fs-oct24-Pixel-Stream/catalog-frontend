import { useState, useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import './SearchModal.scss';
import { useNavigate } from 'react-router';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

export const SearchModal = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const products = useAppSelector((state) => state.products.products);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, products]);

  const handleProductClick = (product: ProductCardType) => {
    navigate(`/${product.category}/${product.itemId}`);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="search-modal"
        onClick={handleOverlayClick}
      >
        <div className="search-modal__content">
          <div
            className="search-modal__close"
            onClick={onClose}
          >
            <button>×</button>
          </div>
          <input
            type="text"
            className="search-modal__input"
            placeholder={t('Search')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <div className="search-modal__wrapper">
              <div className="search-modal__results search-modal__results-container">
                {filteredProducts.length > 0 ?
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="search-modal__item"
                      onClick={() => handleProductClick(product)}
                    >
                      {isTablet && (
                        <img
                          src={product.image}
                          alt={product.name}
                          width={'30px'}
                          height={'30px'}
                        />
                      )}
                      {product.name}
                    </div>
                  ))
                : <div className="search-modal__no-results">{t('searchEmpty')}</div>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
