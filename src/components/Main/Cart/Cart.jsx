import CartItem from "components/Main/Cart/CartItem.jsx"
import styles from "components/Main/Cart/Cart.module.scss"
import { useContext } from "react"
import { CartContext } from "contexts/CartContext"
import { CheckOutContext } from "contexts/CheckOutContext";

function Cart () {
  const { items, totalPrice, handleMinusClick, handlePlusClick } = useContext(CartContext)
  const { checkOutData } = useContext(CheckOutContext)
  return(
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      {/* 購物籃商品 */}
      <section className={`${styles.productList} col col-12`} data-total-price={0}>
      {items.map(item =>
        <CartItem key={item.id} {...item}  handleMinusClick={handleMinusClick} handlePlusClick={handlePlusClick}/>)}
      </section>

      {/* 運費 */}
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>{checkOutData.shipping === 0 ? "免費" : "$ " + checkOutData.shipping}</div>
      </section>

      {/* 總金額 */}
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>$ {totalPrice}</div>
      </section>

    </section>
  )
}

export default Cart