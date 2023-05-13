import styles from "components/Main/Cart/CartItem.module.scss"
import iconMinus from "assets/icons/icon-minus.svg"
import iconPlus from "assets/icons/icon-plus.svg"
import { useState } from "react";

export default function CartItem ({id, name, img, price, quantity, recalculateTotal}) {
  const [count, setCount] = useState(quantity);

  //控制數量增減
  function addCount() {
    setCount(count + 1)
    recalculateTotal(price)
  }
  function reduceCount() {
    if (count > 0) {
      setCount(count - 1)
      recalculateTotal(-price)
    }
  }

  return (
    <div
      key={id}
      className={`${styles.productContainer} col col-12`}
    >
      <img className={styles.imgContainer} src={img} alt={name}/>
      <div className={styles.productInfo}>
        <div className="col col-12">
          <div className="product-name">{name}</div>
          <div className={styles.price}>$ {price * count}</div>
        </div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <img
              className={`${styles.productActionMinus}  cursor-point`}
              src={iconMinus}
              alt="iconMinus"
              onClick={reduceCount}
            />
            <span className={styles.productCount}>{count}</span>
            <img
              className={`${styles.productActionPlus}  cursor-point`}
              src={iconPlus}
              alt="iconPlus"
              onClick={addCount}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
