import { ProductList } from '../ProductList';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { useLocation } from 'react-router';

import './ProductsPage.scss';
import { Breadcrumbs } from '../Breadcrumbs';

type Props = {
  products: ProductCardType[];
};

export const ProductsPage: React.FC<Props> = ({ products }) => {
  const location = useLocation();

  const path = location.pathname.split('/')[1];
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);

  return (
    <section className="products _container container-custom">
      <Breadcrumbs />
      <h1 className="titleMain">{title}</h1>

      <p className="products__quantity">{products.length} models</p>

      <div className="products__filters">
        <div className="field products__control">
          <label
            className="products__label"
            htmlFor="sort"
          >
            Sort by
          </label>
          <div className="control">
            <div
              className="select products__select"
              id="sort"
            >
              {}
              <select className="products__selectList color-secondary">
                <option value="0">Select...</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field products__control">
          <label
            className="products__label"
            htmlFor="sort"
          >
            Items on page
          </label>
          <div className="control">
            <div
              className="select products__select"
              id="sort"
            >
              <select className="products__selectList color-primary">
                <option>16</option>
                <option>32</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {!!products.length && <ProductList products={products} />}
      <div className="productsPagination">PAGINATION</div>
    </section>
  );
};
