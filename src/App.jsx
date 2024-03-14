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
    <div className="flex justify-between bg-amber-400 p-5 my-5">
      <h1 className="text-5xl font-bold bg-amber-400 p-5 my-5">MarZan's Collection</h1>
      <img className="w-[100px] rounded-lg" src="https://i.ibb.co/940W5Fy/NEH7498.jpg" alt="" />
    </div>
      

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

        <div className="w-1/4 p-10 border rounded-lg bg-white shadow-lg">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
