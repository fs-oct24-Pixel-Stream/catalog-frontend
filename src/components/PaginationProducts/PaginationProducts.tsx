import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { CustomEventPageClick } from '../../utils/types/CustomEventPageClick';
import './Pagination.scss';

type Props = {
  pageCount: number;
  handlePageClick: (event: CustomEventPageClick) => void;
};

const PaginationProducts: React.FC<Props> = (props) => {
  const { pageCount, handlePageClick } = props;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event) => {
      setWidth((event.target as Window).innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="paginations products__pagination">
      <ReactPaginate
        breakLabel={width <= 640 ? null : '...'}
        nextLabel=">"
        onPageChange={(event) => handlePageClick(event)}
        pageRangeDisplayed={width <= 340 ? 1 : 2}
        marginPagesDisplayed={width <= 640 ? 0 : 2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="paginations__container"
        breakClassName="paginations__points"
        pageClassName="paginations__page"
        activeClassName="paginations__page--active"
        previousClassName="paginations__page paginations__page--prev"
        nextClassName="paginations__page paginations__page--next"
        disabledClassName="paginations__page--disabled"
        pageLinkClassName="paginations__link"
        activeLinkClassName="paginations__link--active"
        previousLinkClassName="paginations__link paginations__link--prev"
        nextLinkClassName="paginations__link paginations__link--next"
        disabledLinkClassName="paginations__link--disabled"
        hrefAllControls={true}
      />
    </div>
  );
};

export default React.memo(PaginationProducts);
