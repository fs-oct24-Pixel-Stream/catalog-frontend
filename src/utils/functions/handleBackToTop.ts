export const handleBackToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// import { ProductCardType } from './types/ProductCardType';

// export function getNumbers(from: number, to: number): number[] {
//   const numbers = [];

//   for (let n = from; n <= to; n += 1) {
//     numbers.push(n);
//   }

//   return numbers;
// }

// interface Props {
//   products: ProductCardType[];
//   currentPage: number;
//   perPage: number;
// }

// export const visibleItems = (props: Props) => {
//   const { products, currentPage, perPage } = props;
//   const start = currentPage * perPage - perPage;
//   const end = currentPage * perPage;

//   return products.slice(start, end);
// };
