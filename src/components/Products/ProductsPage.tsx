import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import './ProductsPage.scss';

type Props = {
  categoryName: string; //ENUM
};

export const ProductsPage: React.FC<Props> = () => {
  return (
    <section className="products _container">
      <div className="bread-crumbs">BREAD CRUMBS</div>
      {/*BREAD CRUMBS */}

      <h1 className="titleMain">Products</h1>

      <p className="products__quantity">95 models</p>
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
              <select>
                <option>Newest</option>
                <option>Newest</option>
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
              className="select "
              id="sort"
            >
              <select>
                <option>16</option>
                <option>32</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <ProductList />
      <div className="productsPagination">PAGINATION</div>
    </section>
  );
};
