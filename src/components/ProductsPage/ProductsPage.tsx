import React from 'react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

import { variableForFilter } from '../../utils/constants/variableForFilter';
import { useFilterAndPagination } from '../../utils/hooks/useFilterAndPagination';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { ChooseForFilter } from '../../utils/types/ChooseForFilter';
import { correctTitle } from '../../utils/functions/correctTitle';
import { useAppSelector } from '../../app/hooks';

import { ProductList } from '../ProductList';
import { Breadcrumbs } from '../Breadcrumbs';
import PaginationProducts from '../PaginationProducts/PaginationProducts';

import { ProductListSkeleton } from '../Skeletons/ProductListSkeleton/ProductListSkeleton';

import './ProductsPage.scss';

type Props = {
  products: ProductCardType[];
};

export const ProductsPage: React.FC<Props> = ({ products }) => {
  const isLoading = useAppSelector((state) => state.products.loading);
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const title = correctTitle(path);
  const { t } = useTranslation();

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

      <h1 className="titleMain">{t(title)}</h1>

      <p className="products__quantity">
        {products.length} {t('models')}
      </p>

      <div className="products__filters">
        <div className="field products__control products__control--first">
          <label
            className="products__label"
            htmlFor="sort"
          >
            {t('Sortby')}
          </label>
          <div className="control">
            <div
              className="select products__select"
              id="sort"
            >
              <select
                value={t(filterName)}
                onChange={(e) => handleFilter(e)}
                className="products__selectList color-primary"
              >
                {variableForFilter.map((option) => {
                  return (
                    <option
                      key={option}
                      className="color-primary"
                      value={t(option)}
                      disabled={option === ChooseForFilter.SELECT ? true : false}
                    >
                      {t(option)}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="field products__control products__control--second color-primary">
          <label
            className="products__label"
            htmlFor="sort"
          >
            {t('itemsOnPage')}
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
      {isLoading ?
        <ProductListSkeleton />
      : !!products.length && <ProductList products={currentItems} />}
      <PaginationProducts
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </section>
  );
};
