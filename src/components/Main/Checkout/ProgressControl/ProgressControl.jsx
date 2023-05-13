import styles from "components/Main/Checkout/ProgressControl/ProgressControl.module.scss";
import ArrowPrevious from "assets/icons/PreviousArrow.svg";
import ArrowNext from "assets/icons/NextArrow.svg";

function ButtonPrevious({onClick}) {
  return (
    <button className={`${styles.prev} cursor-point prev`} onClick={onClick}>
      <img
        className={styles.prevArrow + " cursor-point"}
        src={ArrowPrevious}
        alt="ArrowPrevious"
      />
      上一步
    </button>
  );
}

function ButtonNext({onClick}) {
  return (
    <button className={`${styles.next} cursor-point next`} onClick={onClick}>
      下一步
      <img
        className={`${styles.NextArrow} cursor-point`}
        src={ArrowNext}
        alt="ArrowNext"
      />
    </button>
  );
}

function ButtonSubmit({onClick}) {
  return <button className={`${styles.submit} cursor-point`} onClick={onClick}>確認下單</button>;
}

function ProgressControl({changeStep, currentStep}) {
  return (
    <section className={`${styles.progressControlContainer} col col-12`}>
      {/* step 1 button */}
      {currentStep === 1 &&
      <section
        className={`${styles.buttonGroup} ${styles.addressButtonGroup} col col-12`}
        data-phase="address"
      >
        <ButtonNext onClick={changeStep}/>
      </section>
      }

      {/* step 2 button */}
      {currentStep === 2 &&
      <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="shipping"
      >
        <ButtonPrevious onClick={changeStep}/>
        <ButtonNext onClick={changeStep}/>
      </section>
      }
      
      {/* step 3 button */}
      {currentStep === 3 &&
      <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="credit-card"
      >
        <ButtonPrevious onClick={changeStep}/>
        <ButtonSubmit />
      </section>
      }
    </section>
  );
}

export default ProgressControl;
