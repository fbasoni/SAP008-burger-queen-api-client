import "../Menus/menuButton.css";

import { getProducts, getSession} from "../../data/api";
 //import { getToken } from "../../data/api.js";
import { useState, useEffect } from "react";
import ProductsCard from "../../components/Products/Products"; 

export function Menu() {
 // console.log("Menu")

 const [products, setProducts] = useState([]);
 const [menuType, setMenuType] = useState([]);
 const [client, setClient] = useState('');
 const session = getSession();

 function menuBreakfast () {
  const filterProductsByBreakfast = products.filter((productMenu) => productMenu.type === 'breakfast');
  setMenuType(filterProductsByBreakfast);
 }

 function menuAllDay () {
  const filterProductsByAllDay = products.filter((productMenu) => productMenu.type === 'all-day');
  setMenuType(filterProductsByAllDay);
 }

 useEffect(() => {
  localStorage.setItem("client", client)
  getProducts()
    .then((products) => {
    setProducts(products)
    })
    
 }, [])


  return (
    <div>
      <h1> 🍗 Welcome, {session.name}</h1>
      <section>
        <input className="clientInput" onChange={(e) => setClient(e.target.value)} type="text" placeholder="Enter client name" ></input>
        <p>Client:{client}</p>
        <br></br>
        <button type="button" id="Breakfast-btn" className="menuButton" onClick={menuBreakfast}>Breakfast</button>
        <button type="button" id="Allday-btn" className="menuButton" onClick={menuAllDay}>All-day</button>
        {menuType.map((product) => <ProductsCard key={product.id}>{product}</ProductsCard>)}
      </section>
    </div>
  );
}

export default Menu;

