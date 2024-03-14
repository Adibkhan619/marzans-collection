import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <div className="flex gap-24 text-2xl font-bold border-b-2">
        <h1>Name</h1>
        <h1>Price</h1>

      </div>
      <div className="">
        {cart.map((item, idx) => (
          <CartItem key={idx} item={item}></CartItem>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
