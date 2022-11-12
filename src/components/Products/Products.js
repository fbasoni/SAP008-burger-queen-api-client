import styles from "./Products.module.css";
import plus from '../../Assets/icons/plusSign.svg';
import minus from '../../Assets/icons/minusSign.svg';


function ProductsCard({children}) {
  return (
    <>
      <div className={styles.products}>
        <div>
          <p className={styles.productName}>{children.name}</p>
          <img
            alt={children.name}
            src={children.image}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productButtonCount}>
          <div className={styles.productPrice}>Price: {children.price}</div>
          <div className={styles.productButtons}>
            <img alt="plus-sign" className={styles.productSigns} src={plus}></img>
            <span className={styles.productCount}>0</span>
            <img alt="minus-sign" className={styles.productSigns} src={minus}></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsCard

