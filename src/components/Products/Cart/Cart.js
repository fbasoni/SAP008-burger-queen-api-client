import styles from './Cart.module.css'


function Cart() {
  return (
    <>
      <div className={styles.cart}>
        <h1>Guest check</h1>
        <div>
          <p>Total:</p>
          <span>$ 25</span>
        </div>
      </div>
    </>
  );
}
export default Cart;

