import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router';
import { ProductList } from '../ProductList';
import PaginationProducts from '../PaginationProducts/PaginationProducts';

import { filteredProducts } from '../../utils/functions/filteredProducts';
import { getSearchWith, SearchParams } from '../../utils/functions/searchHelper';
import { handleBackToTop } from '../../utils/functions/handleBackToTop';
import { variableForFilter } from '../../utils/constants/variableForFilter';

import { ProductCardType } from '../../utils/types/ProductCardType';
import { ChooseForFilter } from '../../utils/types/ChooseForFilter';
import { CustomEventPageClick } from '../../utils/types/CustomEventPageClick';

import './ProductsPage.scss';
import { Breadcrumbs } from '../Breadcrumbs';

type Props = {
  products: ProductCardType[];
};

export const ProductsPage: React.FC<Props> = ({ products }) => {
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState<ProductCardType[]>([]);

  const [itemOffset, setItemOffset] = useState(0); //початковий девайс на сторінці (+1)
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);

  const perPage = searchParams.get('devicesOnPage') || 16;
  const filterName = searchParams.get('sort') || ChooseForFilter.SELECT;

  const updatedProducts = filteredProducts(filterName as ChooseForFilter, products);

  const endOffset = itemOffset + +perPage; //кінцевий девайс на сторінці
  const currentPage = Number(searchParams.get('page')) || 1;

  const handlePerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event) {
      const newItemsPerPage = +event.target.value;
      const newCountOfPages = Math.ceil(updatedProducts.length / newItemsPerPage);

      // Обчислюємо нову кількість сторінок та відповідну сторінку
      const newPage = Math.min(currentPage, newCountOfPages);

      const newParams = {
        devicesOnPage: event.target.value.toString(),
        page: newPage.toString(),
      };

      setSearchParams((currentParams) => {
        return getSearchWith(currentParams, newParams);
      });

      // Оновлюємо кількість сторінок для пагінації
      setPageCount(newCountOfPages);
      // Оновлюємо кількість елементів на сторінці
      setItemOffset((newPage - 1) * newItemsPerPage); // Оновлюємо початкову позицію для пагінації
    }
  };

  const handlePageClick = useCallback(
    (event: CustomEventPageClick) => {
      const newOffset = (event.selected * +perPage) % products.length;
      setItemOffset(newOffset);
      handleBackToTop();

      setTimeout(() => {
        setSearchParams((currentParams) => {
          const settingPage = event.selected >= 0 ? event.selected + 1 : null;

          const devicesOnPage = currentParams.get('devicesOnPage') || perPage;
          const sort = currentParams.get('sort') || filterName;

          const newParams: SearchParams = {
            sort: sort,
            devicesOnPage: devicesOnPage.toString(),
            page: settingPage?.toString() || '',
          };

          const updatedSearchParams = getSearchWith(currentParams, newParams);

          return updatedSearchParams;
        });
      }, 100);
    },
    [perPage, products.length, setSearchParams, filterName],
  );

  const handleFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = event.target.value;

      if (newValue !== filterName) {
        setSearchParams((currentParams) => {
          const sortParam = newValue === ChooseForFilter.SELECT ? null : newValue;

          const devicesOnPage = currentParams.get('devicesOnPage') || perPage;

          return getSearchWith(currentParams, {
            sort: sortParam,
            devicesOnPage: devicesOnPage.toString(),
            page: '1',
          });
        });
      }
    },
    [filterName, setSearchParams],
  );

  useEffect(() => {
    const newItems = updatedProducts.slice(itemOffset, endOffset);

    if (JSON.stringify(newItems) !== JSON.stringify(currentItems)) {
      setCurrentItems(newItems);
    }
  }, [updatedProducts, itemOffset, endOffset]);

  useEffect(() => {
    setPageCount(Math.ceil(products.length / +perPage));
  }, [products, perPage]);

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
