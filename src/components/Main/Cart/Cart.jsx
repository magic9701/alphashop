import CartItem from "components/Main/Cart/CartItem.jsx"
import styles from "components/Main/Cart/Cart.module.scss"
import { useState } from "react"

const dummyItems = [
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
  const [items, setItems] = useState(dummyItems)

  //按鈕加減數量
  function handleMinusClick(itemId) {
    setItems(items.map(item => {
      if(item.id === itemId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    }))
  }

  function handlePlusClick(itemId) {
    setItems(items.map(item => {
      if(item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    }))
  }
  
  //計算總價
  let totalPrice = 0
  items.forEach(item => 
    totalPrice += item.price * item.quantity
  )

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