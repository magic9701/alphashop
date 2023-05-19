import styles from "components/Main/Checkout/Steps/StepTwo.module.scss";
import { CheckOutContext } from "contexts/CheckOutContext";
import { useContext } from "react";


function ShippingWay({ value, inputId, text, price, period, defaultChecked }) {
  const { handleShippingChange } = useContext(CheckOutContext)
  return (
    <label className={`${styles.radioGroup} col col-10`}>
      <input id={inputId} type="radio" name="shipping" defaultChecked={defaultChecked} value={value} onChange={handleShippingChange}/>
      <div className={`${styles.radioInfo}`}>
        <div className="col col-12">
          <div className={styles.text}>{text}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div className={`${styles.period} col col-12`}>{period}</div>
      </div>
      <div className="radio-box-border" />
    </label>
  );
}

function StepTwo() {
  return (
    <form className="col col-12" data-phase="shipping">
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={`${styles.formBody} col col-12`}>
        <ShippingWay
          value={0}
          inputId={"shipping-standard"}
          text={"標準運送"}
          price={"免費"}
          period={"約 3~7 個工作天"}
          defaultChecked={true}
        />
        <ShippingWay
          value={500}
          inputId={"shipping-dhl"}
          text={"DHL 貨運"}
          price={"$500"}
          period={"48 小時內送達"}
        />
      </section>
    </form>
  );
}

export default StepTwo;
