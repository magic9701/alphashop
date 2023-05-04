import CartItem from "components/Main/Cart/CartItem.jsx"
import styles from "components/Main/Cart/Cart.module.scss"

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
  let totalPrice = 0
  items.forEach(item => 
    totalPrice += item.price * item.quantity
  )

  return(
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`${styles.productList} col col-12`} data-total-price={0}>
      {items.map(item =>
        <CartItem key={item.id} {...item}/>)}
      </section>
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>$ {totalPrice}</div>
      </section>
    </section>
  )
}

export default Cart