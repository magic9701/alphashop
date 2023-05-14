import styles from "components/Main/Checkout/Steps/StepThree.module.scss";

function RenderInput({ divCol, inputLabel, placeholder }) {
  return (
    <div className={`${divCol} ${styles.container}`}>
      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>{inputLabel}</div>
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
}

function StepThree() {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className="form-body col col-12">
        <RenderInput
          divCol={"col col-8"}
          inputLabel={"持卡人姓名"}
          placeholder={"John Doe"}
        />
        <RenderInput
          divCol={"col col-8"}
          inputLabel={"卡號"}
          placeholder={"1111 2222 3333 4444"}
        />
        <div className={`${styles.thirdRow} col col-12`}>
          <RenderInput inputLabel={"有效期限"} placeholder={"MM/YY"} />
          <RenderInput inputLabel={"CVC / CCV"} placeholder={"123"} />
        </div>
      </section>
    </form>
  );
}

export default StepThree;
