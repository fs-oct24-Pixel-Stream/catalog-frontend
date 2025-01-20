import { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import { useAppSelector } from '../../app/hooks';
import { ProductCardType } from '../../utils/types/ProductCardType';

import './DesctopSearch.scss';

export const DesctopSearch = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const products = useAppSelector((state) => state.products.products);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, products]);

  const handleProductClick = (product: ProductCardType) => {
    navigate(`/${product.category}/${product.itemId}`);
    onClose();
  };
  const isDesktop = useMediaQuery({ query: '(min-width: 1199px)' });

  // відстежуємо клік поза віконечком і поза інпутом
  const windowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        windowRef.current &&
        inputRef.current &&
        !windowRef.current.contains(event.target as Node) &&
        !inputRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      {isDesktop && (
        <div className="search">
          <div className="search-dropdown">
            <div
              className="search-dropdown__close"
              onClick={onClose}
            >
              <button>×</button>
            </div>
            <input
              ref={inputRef}
              className="input is-large search-dropdown__input"
              type="text"
              placeholder={t('Search')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {query && (
            <div
              ref={windowRef}
              className="search-dropdown__results"
            >
              {filteredProducts.length > 0 ?
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="search-dropdown__item"
                    onClick={() => handleProductClick(product)}
                  >
                    <img
                      src={product.image}
                      alt="product image"
                      className="search-image"
                    />
                    {product.name}
                  </div>
                ))
              : <div className="search-dropdown__no-results">{t('searchEmpty')}</div>}
            </div>
          )}
        </div>
      )}
    </>
  );
};
