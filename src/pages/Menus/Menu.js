import "../Menus/Menus.css"
import styles from '../Menus/Menus.css'
import MenuButton from "../../components/Products/menu/MenuButton"
import Cart from "../../components/Products/Cart/Cart";
import Input from "../../components/Forms/input/Input";

import { getProducts, getSession} from "../../data/api";
import { useState, useEffect } from "react";
import ProductsCard from "../../components/Products/Products"; 

export function Menu() {

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
    <div className="menu-main">
      <p className="welcome">Welcome, {session.name}</p>
      <section className="menu-page">
        <Input
          className={styles.clientInput}
          onChange={(e) => setClient(e.target.value)}
          type="text"
          placeholder="Enter client name"
        ></Input>
        <p>Customer:{client}</p>
        <MenuButton
          className="products-box"
          type="button"
          id="Breakfast-btn"
          value="Breakfast"
          onClick={menuBreakfast}
        />
        <MenuButton
          className="products-box"
          type="button"
          id="Allday-btn"
          value="All-Day"
          onClick={menuAllDay}
        />
        <section className="menu-items">
          {menuType.map((product) => (
            <ProductsCard key={product.id}>{product}</ProductsCard>
          ))}
        </section>
      </section>
      <Cart></Cart>
    </div>
  );
}

export default Menu;

