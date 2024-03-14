import { useEffect, useState } from "react";
import "./App.css";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../public/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleCart = (p) => {
    setCart([...cart, p]);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Marzan's Collection</h1>

      <div className="flex  justify-evenly gap-5">
        <div className="grid grid-cols-4 gap-5">
          {products.map((pd, idx) => (
            <SingleProduct
              key={idx}
              product={pd}
              handleCart={handleCart}
            ></SingleProduct>
          ))}
        </div>

        <div className="w-1/4 p-10 border shadow-lg">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
