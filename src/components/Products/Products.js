import styles from "./Products.module.css";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

function ProductsCard({children}) {
  return (
    <>
      <div className={styles.products}>
        <div className={styles.productsInfo}>
          <p className={styles.productName}>{children.name}</p>
          <img
            alt={children.name}
            src={children.image}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productsAmount}>
          <p className={styles.productPrice}>Price: {children.price}</p>
          <div className={styles.productButtonCount}>
            <div className={styles.productButtons}>
              <AiOutlinePlus className={styles.sign}></AiOutlinePlus>
              <span className={styles.productCount}>0</span>
              <AiOutlineLine className={styles.sign}></AiOutlineLine>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsCard

