import PropTypes from "prop-types";

const SingleProduct = ({ product, handleCart }) => {
  const { title, price, image, category, description } = product;
  return (
    <div>
      <div className="border bg-white shadow-lg rounded-md space-y-3 p-5">
        <img
          className=" p-5 m-auto"
          src={image}
          alt=""
        />
        <p>{category}</p>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{
          // description
          `${description.slice(0, 80)}...`
        }</p>
        <h2 className="text-xl font-semibold">${price}</h2>
        <button
          onClick={() => handleCart(product)}
          className="bg-green-400 rounded-lg text-xl text-white font-semibold px-5 py-3 "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

SingleProduct.propType = {
  product: PropTypes.object,
  handleCart: PropTypes.func
};
export default SingleProduct;
