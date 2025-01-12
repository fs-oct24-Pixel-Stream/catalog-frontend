import { useAppSelector } from '../../app/hooks';
import { CartItem } from '../../components/CartItem/CartItem';
import './CartPage.scss';

export const CartPage = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div>
      {!!cart.length &&
        cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
          />
        ))}
    </div>
  );
};
