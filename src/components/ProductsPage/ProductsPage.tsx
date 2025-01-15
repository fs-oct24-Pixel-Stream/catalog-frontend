import React from 'react';
import { useLocation } from 'react-router';
import { ProductList } from '../ProductList';
import PaginationProducts from '../PaginationProducts/PaginationProducts';
import { Breadcrumbs } from '../Breadcrumbs';

import { variableForFilter } from '../../utils/constants/variableForFilter';
import { useFilterAndPagination } from '../../utils/hooks/useFilterAndPagination';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { ChooseForFilter } from '../../utils/types/ChooseForFilter';

import './ProductsPage.scss';

type Props = {
  products: ProductCardType[];
};

export const ProductsPage: React.FC<Props> = ({ products }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);

  const {
    filterName,
    handleFilter,
    perPage,
    handlePerPage,
    currentItems,
    pageCount,
    handlePageClick,
  } = useFilterAndPagination(products);
  return (
    <section className="products _container container-custom">
      <Breadcrumbs />

      <h1 className="titleMain">{title}</h1>

      <p className="products__quantity">{products.length} models</p>

      <div className="products__filters">
        <div className="field products__control products__control--first">
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
              <select
                value={filterName}
                onChange={(e) => handleFilter(e)}
                className="products__selectList color-primary"
              >
                {variableForFilter.map((option) => (
                  <option
                    key={option}
                    className="color-primary"
                    value={option}
                    disabled={option === ChooseForFilter.SELECT ? true : false}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field products__control products__control--second color-primary">
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
              <select
                className="products__selectList color-primary"
                value={perPage}
                onChange={handlePerPage}
              >
                <option>16</option>
                <option>24</option>
                <option>32</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {!!products.length && <ProductList products={currentItems} />}
      <PaginationProducts
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </section>
  );
};
