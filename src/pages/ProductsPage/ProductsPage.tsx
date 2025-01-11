import './ProductsPage.scss';
import { ProductList } from '../../components/ProductList';
import { useEffect } from 'react';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { useAppSelector } from '../../app/hooks';

type Props = {
  categoryName: string; //ENUM
};

export const ProductsPage: React.FC<Props> = (props) => {
  const { categoryName } = props;
  const phones = useAppSelector((state) => state.phones.phones);
  const tablets = useAppSelector((state) => state.tablets.tablets);
  const accessories = useAppSelector((state) => state.accessories.accessories);

  let products: ProductCardType[] | null = null;
  console.log(categoryName);
  console.log(phones);

  useEffect(() => {
    if (categoryName === 'phones') {
      products = phones;
    }
    if (categoryName === 'tablets') {
      products = tablets;
    }
    if (categoryName === 'accessories') {
      products = accessories;
    }
  }, [categoryName]);

  return (
    <section className="products _container">
      <div className="bread-crumbs">BREAD CRUMBS</div>
      {/*BREAD CRUMBS */}

      <h1 className="titleMain">Products</h1>

      <p className="products__quantity">95 models</p>

      <div className="products__filters">
        <div className="field products__control">
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
              <select className="products__selectList color-secondary">
                <option value="0">Select...</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field products__control">
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
              <select className="products__selectList color-primary">
                <option>16</option>
                <option>32</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {products && <ProductList products={products} />}
      <div className="productsPagination">PAGINATION</div>
    </section>
  );
};
