import styles from "components/main/checkout/ProgressControl.module.scss";
import ArrowPrevious from "assets/icons/PreviousArrow.svg";
import ArrowNext from "assets/icons/NextArrow.svg";

function ButtonPrevious() {
  return (
    <button className={`${styles.prev} cursor-point`}>
      <img
        className={styles.prevArrow + " cursor-point"}
        src={ArrowPrevious}
        alt="ArrowPrevious"
      />
      上一步
    </button>
  );
}

function ButtonNext() {
  return (
    <button className={`${styles.next} cursor-point`}>
      下一步
      <img
        className={`${styles.NextArrow} cursor-point`}
        src={ArrowNext}
        alt="ArrowNext"
      />
    </button>
  );
}

function ButtonSubmit() {
  return <button className={`${styles.submit} cursor-point`}>確認下單</button>;
}

function ProgressControl() {
  return (
    <section className={`${styles.progressControlContainer} col col-12`}>
      <section
        className={`${styles.buttonGroup} ${styles.addressButtonGroup} col col-12`}
        data-phase="address"
      >
        <ButtonNext />
      </section>
      {/* <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="shipping"
      >
        <ButtonPrevious />
        <ButtonNext />
      </section>
      <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="credit-card"
      >
        <ButtonPrevious />
        <ButtonSubmit />
      </section> */}
    </section>
  );
}

export default ProgressControl;
