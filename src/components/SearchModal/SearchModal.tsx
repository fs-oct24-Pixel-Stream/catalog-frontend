import { useState, useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import './SearchModal.scss';
import { Link, useNavigate } from 'react-router';
import { ProductCardType } from '../../utils/types/ProductCardType';

export const SearchModal = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const products = useAppSelector((state) => state.products.products);
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, products]);

  console.log('filteredProducts', products);

  const handleProductClick = (product: ProductCardType) => {
    navigate(`/${product.category}/${product.itemId}`);
    onClose();
  };

  return (
    <div className="search-modal">
      {/* <div
        className="search-modal__overlay"
        onClick={onClose}
      > */}
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
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <div className="search-modal__results">
            {filteredProducts.length > 0 ?
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="search-modal__item"
                  onClick={() => handleProductClick(product)}
                >
                  {product.name}
                </div>
              ))
            : <div className="search-modal__no-results">
                No products found matching your search.
              </div>
            }
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};
