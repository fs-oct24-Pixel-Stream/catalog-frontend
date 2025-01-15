import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router';

import { ProductList } from '../ProductList';
import { PaginationProducts } from '../PaginationProducts/PaginationProducts';

import { variableForFilter } from '../../utils/constants/variableForFilter';
import { handleBackToTop } from '../../utils/functions/handleBackToTop';
import { filteredProducts } from '../../utils/functions/filteredProducts';

import { ChooseForFilter } from '../../utils/types/ChooseForFilter';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { getSearchWith } from '../../utils/functions/searchHelper';
import './ProductsPage.scss';

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
      const newCount = Math.ceil(products.length / +event.target.value);
      setPageCount(newCount);
      const newCountOfPages = Math.ceil(updatedProducts.length / +event.target.value);
      const itemsParams = event.target.value;
      const newParams = {
        devicesOnPage: itemsParams.toString(),
        page: (newCountOfPages < currentPage ? newCountOfPages : currentPage).toString(),
      };

      setSearchParams((currentParams) => {
        return getSearchWith(currentParams, newParams);
      });
    }
  };

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * +perPage) % products.length;
    setItemOffset(newOffset);
    handleBackToTop();

    setSearchParams((currentParams) => {
      console.log(currentParams);
      const settingPage = event.selected >= 0 ? event.selected + 1 : null;

      return getSearchWith(currentParams, { page: settingPage.toString() });
    });
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      console.log(event.target.value);

      setSearchParams((currentParams) => {
        const sortParam = event.target.value === ChooseForFilter.SELECT ? null : event.target.value;

        return getSearchWith(currentParams, {
          sort: sortParam,
          page: '1',
        });
      });
    }
  };

  useEffect(() => {
    setPageCount(Math.ceil(products.length / +perPage));
  }, [products, perPage]);

  useEffect(() => {
    setCurrentItems(updatedProducts.slice(itemOffset, endOffset));
  }, [updatedProducts, itemOffset, endOffset]);

  return (
    <section className="products _container container-custom">
      <div className="bread-crumbs">BREAD CRUMBS</div>

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
