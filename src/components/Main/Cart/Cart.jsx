import CartItem from "components/Main/Cart/CartItem.jsx"
import styles from "components/Main/Cart/Cart.module.scss"
import { useState } from "react"

const items = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]


function Cart () {
  let itemsPrice = 0
  items.forEach(item => 
    itemsPrice += item.price * item.quantity
  )
  const [totalPrice, setTotalPrice] = useState(itemsPrice)
  function recalculateTotal(price) {
    setTotalPrice(totalPrice + price)
  }

  return(
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      {/* 購物籃商品 */}
      <section className={`${styles.productList} col col-12`} data-total-price={0}>
      {items.map(item =>
        <CartItem key={item.id} {...item} recalculateTotal={recalculateTotal} />)}
      </section>

      {/* 運費 */}
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
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