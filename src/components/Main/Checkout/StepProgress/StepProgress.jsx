import styles from "components/Main/Checkout/StepProgress/StepProgress.module.scss";
import stepUndone from "assets/icons/stepUndone.svg";
import stepDone from "assets/icons/currentStep.svg";

function Progress({ dataPhase, number, label, currentStep}) {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      <span className={styles.progressIcon}>      
        <span className={`${styles.text} ${number <= currentStep && styles.done}`}>{number > (currentStep - 1) ? number : "✓"}</span>
        <img
          className={`${styles.icon} cursor-point}`}
          src={number <= currentStep ? stepDone : stepUndone}
          alt="stepIcon"
        />
      </span>
      <span className={styles.progressLabel}>{label}</span>
    </span>
  );
}

function StepProgress({currentStep}) {
  return (
    <div className="col col-12">
      {/* register-title */}
      <h2 className={styles.registerTitle + " col col-12"}>結帳</h2>
      {/* register-progress */}
      <section className={styles.progressContainer + " col col-12"}>
        <Progress dataPhase={"address"} number={1} label={"寄送地址"} currentStep={currentStep} />
        <span className={styles.progressBar} data-order={1} />
        <Progress dataPhase={"shipping"} number={2} label={"運送方式"} currentStep={currentStep} />
        <span className={styles.progressBar} data-order={2} />
        <Progress dataPhase={"credit-card"} number={3} label={"付款資訊"} currentStep={currentStep} />
      </section>
    </div>
  );
}

export default StepProgress;
