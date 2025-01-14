import { ProductList } from '../ProductList';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { useLocation } from 'react-router';
// import cn from 'classnames';
import './ProductsPage.scss';
import { useState } from 'react';
import { visibleItems } from '../../utils/utilsFunctions';
import ReactPaginate from 'react-paginate';

type Props = {
  products: ProductCardType[];
};

export const ProductsPage: React.FC<Props> = ({ products }) => {
  const [total] = useState<ProductCardType[]>(products);
  const [visiblePages, setVisiblePages] = useState(12); //кількість сторінок
  const [perPage, setPerPage] = useState(3); // вибрана кількість девайсів на сторінці
  const [currentPage, setCurrentPage] = useState(1); //поточна сторінка

  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);

  // const totalPages: number[] = getNumbers(1, Math.ceil(total.length / perPage)); //масив з кількості сторінок
  const showPages = visibleItems({ products, currentPage, perPage }); // які девайси будуть на сторінці

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  // const handleNextPage = (sign: '+' | '-') => {
  //   if (sign === '+') {
  //     setCurrentPage(currentPage + 1);
  //   } else {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(+event.target.value);
    setCurrentPage(1);
    setVisiblePages(() => Math.ceil(products.length / +event.target.value));
  };

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + perPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = products.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(products.length / perPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * perPage) % products.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
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
              {}
              {/* <select className="products__selectList color-primary">
                <option
                  className="color-secondary "
                  selected
                  value="0"
                  disabled
                >
                  Select...
                </option>
                {variableForFilter.map((option) => (
                  <option
                    key={option}
                    className="color-primary"
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select> */}
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
                <option>48</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {!!products.length && <ProductList products={showPages} />}

      <div className="pagination products__pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={visiblePages}
          previousLabel="<"
          // renderOnZeroPageCount={null}
          containerClassName="pagination__container"
          breakClassName="pagination__item"
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
