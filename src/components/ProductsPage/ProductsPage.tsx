import { ProductList } from '../ProductList';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { useLocation } from 'react-router';
// import cn from 'classnames';
import './ProductsPage.scss';
import { useState } from 'react';
import { visibleItems } from '../../utils/utilsFunctions';
import ReactPaginate from 'react-paginate';
import { handleBackToTop } from '../../utils/functions/handleBackToTop';
import { variableForFilter } from '../../utils/constants/variableForFilter';

import './ProductsPage.scss';
import { ChooseForFilter } from '../../utils/types/ChooseForFilter';

type Props = {
  products: ProductCardType[];
};

export const ProductsPage: React.FC<Props> = ({ products }) => {
  const [perPage, setPerPage] = useState(16); // вибрана кількість девайсів на сторінці
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState<ProductCardType[]>([]);
  const [filterName, setFilterName] = useState<ChooseForFilter>(ChooseForFilter.SELECT);
  const [width, setWidth] = useState(window.innerWidth);
  const [itemOffset, setItemOffset] = useState(0); //початковий девайс на сторінці (+1)

  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);
  const endOffset = itemOffset + perPage; //кінцевий девайс на сторінці

  const filteredProducts = useMemo(() => {
    switch (filterName) {
      case ChooseForFilter.CHEAPEST:
        return [...products].sort(
          (productPrev, productCurrent) => productPrev.price - productCurrent.price,
        );
      case ChooseForFilter.EXPENSIVE:
        return [...products].sort(
          (productPrev, productCurrent) => productCurrent.price - productPrev.price,
        );
      case ChooseForFilter.NEWEST:
        return [...products].sort(
          (productPrev, productCurrent) => productCurrent.year - productPrev.year,
        );
      default:
        return products;
    }
  }, [products, filterName]);

  console.log(filterName);
  useEffect(() => {
    const handleResize = (event: Event) => {
      setWidth((event.target as Window).innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(+event.target.value);
    setPageCount(() => Math.ceil(products.length / +event.target.value));
  };

  useEffect(() => {
    setPageCount(Math.ceil(products.length / perPage));
  }, [products, perPage]);

  useEffect(() => {
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
  }, [filteredProducts, itemOffset, endOffset]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * perPage) % products.length; //з якої девайси розпочинається показ елементів

    setItemOffset(newOffset);
    handleBackToTop();
  };
  const hrefBuild = () => {
    console.log('hrefBuild');
  };

  return (
    <section className="products _container container-custom">
      <div className="bread-crumbs">BREAD CRUMBS</div>
      {/*BREAD CRUMBS */}

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
                onChange={(event) => setFilterName(event.target.value as ChooseForFilter)}
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
                onChange={handleSelectChange}
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

      <div className="pagination products__pagination">
        <ReactPaginate
          breakLabel={width <= 640 ? null : '...'}
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={width <= 640 ? 1 : 2}
          marginPagesDisplayed={width <= 640 ? 0 : 2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination__container"
          breakClassName="pagination__points"
          pageClassName="pagination__page"
          activeClassName="pagination__page--active"
          previousClassName="pagination__page pagination__page--prev"
          nextClassName="pagination__page pagination__page--next"
          disabledClassName="pagination__page--disabled"
          pageLinkClassName="pagination__link"
          activeLinkClassName="pagination__link--active"
          previousLinkClassName="pagination__link pagination__link--prev"
          nextLinkClassName="pagination__link pagination__link--next"
          disabledLinkClassName="pagination__link--disabled"
          hrefBuilder={hrefBuild}
          hrefAllControls={true}
        />
      </div>
    </section>
  );
};
