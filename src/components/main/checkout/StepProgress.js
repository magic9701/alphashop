import styles from "components/main/checkout/StepProgress.module.scss";
import stepUndone from "assets/icons/stepUndone.svg";

function Progress({ dataPhase, number, label }) {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{number}</span>
        <img className={styles.icon} src={stepUndone} alt="" />
      </span>
      <span className={styles.progressLabel}>{label}</span>
    </span>
  );
}

function StepProgress() {
  return (
    <div>
      {/* register-title */}
      <h2 className={styles.registerTitle}>結帳</h2>
      {/* register-progress */}
      <section className={styles.progressContainer}>
        <Progress dataPhase={"address"} number={1} label={"寄送地址"} />
        <span className={styles.progressBar} data-order={1} />
        <Progress dataPhase={"shipping"} number={2} label={"運送方式"} />
        <span className={styles.progressBar} data-order={2} />
        <Progress dataPhase={"credit-card"} number={3} label={"付款資訊"} />
      </section>
    </div>
  );
}

export default StepProgress;
