import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

interface Props {
  pageCount: number;
  handlePageClick: (event: any) => void;
}

export const PaginationProducts: React.FC<Props> = (props) => {
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

  const hrefBuild = () => {
    // console.log('hrefBuild');
  };

  return (
    <div className="pagination products__pagination">
      <ReactPaginate
        breakLabel={width <= 640 ? null : '...'}
        nextLabel=">"
        onPageChange={(event) => handlePageClick(event)}
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
  );
};
