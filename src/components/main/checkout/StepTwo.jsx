import styles from "components/main/checkout/StepTwo.module.scss";

function ShippingWay({ dataPrice, inputId, text, price, period }) {
  return (
    <label className={`${styles.radioGroup} col col-10`} data-price={dataPrice}>
      <input id={inputId} type="radio" name="shipping" defaultChecked="" />
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
          dataPrice={"0"}
          inputId={"shipping-standard"}
          text={"標準運送"}
          price={"免費"}
          period={"約 3~7 個工作天"}
        />
        <ShippingWay
          dataPrice={"500"}
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
