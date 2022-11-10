import { getProducts } from "../../data/api";
 //import { getToken } from "../../data/api.js";


export function Menu() {
 // console.log("Menu")

   getProducts();
  return (
    <div className="registerPage">
      <h1>Vamos comer!</h1>
    </div>
  );
}

export default Menu;
