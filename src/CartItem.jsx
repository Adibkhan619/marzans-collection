import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  console.log(item);
  const { title, price } = item;
  return (
    <div className="flex justify-between gap-5 space-y-4 items-center text-center border-b-2">
      <h1>{title.slice(0, 20)} </h1>
      <h1 className="text-right">{price}</h1>

    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};
export default CartItem;
