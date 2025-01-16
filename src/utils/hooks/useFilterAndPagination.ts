import { useCallback, useEffect, useState } from 'react';
import { ProductCardType } from '../types/ProductCardType';
import { getSearchWith, SearchParams } from '../functions/searchHelper';
import { handleBackToTop } from '../functions/handleBackToTop';
import { CustomEventPageClick } from '../types/CustomEventPageClick';
import { filteredProducts } from '../functions/filteredProducts';
import { useSearchParams } from 'react-router';
import { ChooseForFilter } from '../types/ChooseForFilter';

export const useFilterAndPagination = (products: ProductCardType[]) => {
  const [pageCount, setPageCount] = useState(0); //кількість сторінок для пагінації
  const [currentItems, setCurrentItems] = useState<ProductCardType[]>([]);

  const [itemOffset, setItemOffset] = useState(0); //початковий девайс на сторінці (+1)
  const [searchParams, setSearchParams] = useSearchParams();

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
        page: '1',
      };

      setSearchParams((currentParams) => {
        return getSearchWith(currentParams, newParams);
      });

      setPageCount(newCountOfPages);
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

  return {
    filterName,
    handleFilter,
    perPage,
    handlePerPage,
    currentItems,
    pageCount,
    handlePageClick,
  };
};
