import Checkout from "components/Main/Checkout/CheckOut.jsx"
import Cart from "components/Main/Cart/Cart.jsx"
import styles from "components/Main/Main.module.scss"
import { CartContextProvider } from "contexts/CartContext.jsx"
import { CheckOutContextProvider } from "contexts/CheckOutContext.jsx"

export default function Main () {
  return (
      <main className="site-main">
        <div className={styles.mainContainer}>
          <CheckOutContextProvider>
            <CartContextProvider>
              <Checkout />
              <Cart />
            </CartContextProvider>
          </CheckOutContextProvider>

        </div>
      </main>
  )
}