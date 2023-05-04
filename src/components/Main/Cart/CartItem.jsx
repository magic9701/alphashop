import styles from "components/Main/Cart/CartItem.module.scss"
import iconMinus from "assets/icons/icon-minus.svg"
import iconPlus from "assets/icons/icon-plus.svg"

export default function CartItem ({id, name, img, price, quantity}) {
  return (
    <div
      key={id}
      className={`${styles.productContainer} col col-12`}
      data-count={quantity}
      data-price={price}
    >
      <img className={styles.imgContainer} src={img} alt={name}/>
      <div className={styles.productInfo}>
        <div className="col col-12">
          <div className="product-name">{name}</div>
          <div className={styles.price}>$ {price * quantity}</div>
        </div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <img
              className={`${styles.productActionMinus}  cursor-point`}
              src={iconMinus}
              alt="iconMinus"
            />
            <span className={styles.productCount}>{quantity}</span>
            <img
              className={`${styles.productActionPlus}  cursor-point`}
              src={iconPlus}
              alt="iconPlus"
            />
          </div>
        </div>
      </div>
    </div>
  )
}