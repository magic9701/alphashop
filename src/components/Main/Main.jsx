import Checkout from "components/Main/Checkout/CheckOut.jsx"
import Cart from "components/Main/Cart/Cart.jsx"
import styles from "components/Main/Main.module.scss"

export default function Main () {
  return (
    <main className="site-main">
      <div className={styles.mainContainer}>
        <Checkout />
        <Cart />
      </div>
    </main>
  )
}