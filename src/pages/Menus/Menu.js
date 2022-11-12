import { getProducts } from "../../data/api";
 //import { getToken } from "../../data/api.js";
import { useState, useEffect } from "react";
import ProductsCard from "../../components/Products/Products"; 

export function Menu() {
 // console.log("Menu")

 const [products, setProducts] = useState([]);

 useEffect(() => {
  getProducts()
    .then((products) => setProducts(products))
 })
  return (
    <div>
      <h1>🍗 Menu...</h1>
      <section>
        {products.map((product) => <ProductsCard key={product.id}>{product}</ProductsCard>)}
      </section>
    </div>
  );
}

export default Menu;
