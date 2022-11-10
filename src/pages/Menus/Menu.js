import { getProducts } from "../../data/api";
 //import { getToken } from "../../data/api.js";


export function Menu() {
 // console.log("Menu")

   getProducts();
  return (
    <div>
      <h1>🍗 preparing menu...</h1>
    </div>
  );
}

export default Menu;
