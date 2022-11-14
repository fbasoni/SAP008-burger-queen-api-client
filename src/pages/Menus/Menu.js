import "../Menus/menuButton.css";

import { getProducts, getSession} from "../../data/api";
 //import { getToken } from "../../data/api.js";
import { useState, useEffect } from "react";
import ProductsCard from "../../components/Products/Products"; 

export function Menu() {
 // console.log("Menu")

 const [products, setProducts] = useState([]);
 const [menu, setMenu] = useState('');
 const [client, setClient] = useState('');
 const session = getSession();

 function menuBreakfast () {
  setMenu('breakfast')
 }

 function menuAllDay () {
  setMenu('all-day')
 }

 useEffect(() => {
  localStorage.setItem("client", client)
  console.log(client);
  getProducts()
    .then((products) => {
    const filterProducts =  products.filter((productMenu) => productMenu.type === menu)
    setProducts(filterProducts)
    })
    
 })


  return (
    <div>
      <h1> 🍗 Wellcome, {session.name}</h1>
      <section>
        <input className="clientInput" onChange={(e) => setClient(e.target.value)} type="text" placeholder="Enter client name" ></input>
        <p>Client:{client}</p>
        <br></br>
        <button type="button" id="Breakfast-btn" className="menuButton" onClick={menuBreakfast}>Breakfast</button>
        <button type="button" id="Allday-btn" className="menuButton" onClick={menuAllDay}>All-day</button>
        {products.map((product) => <ProductsCard key={product.id}>{product}</ProductsCard>)}
      </section>
    </div>
  );
}

export default Menu;
