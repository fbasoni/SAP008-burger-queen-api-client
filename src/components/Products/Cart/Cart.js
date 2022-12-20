import styles from './Cart.module.css'

function Cart({text, clientName, total, handleOnClick}) {
  return (
    <>
      <div className={styles.cartContainer}>
        <section className={styles.cart}>
          <h1 className={styles.cartTitle}>Guest check</h1>
          <p className={styles.customerInfo}>Nome do cliente:{clientName}</p>
          <p className={styles.productsTotal}>Total: R${total}</p>
        </section>
        <button className={styles.orderBtn} onClick={handleOnClick}>
          Send order
        </button>
      </div>
    </>
  );
}
export default Cart;

