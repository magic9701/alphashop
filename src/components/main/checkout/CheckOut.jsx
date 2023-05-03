import StepProgress from "components/Main/Checkout/StepProgress/StepProgress.jsx";
import StepOne from "components/Main/Checkout/Steps/StepOne";
import StepTwo from "components/Main/Checkout/Steps/StepTwo";
import StepThree from "components/Main/Checkout/Steps/StepThree";
import ProgressControl from "components/Main/Checkout/ProgressControl/ProgressControl";

export default function CheckOut() {
  return (
    <section
      class="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      <StepProgress />
      <StepOne />
      {/* <StepTwo /> */}
      {/* <StepThree /> */}
      <ProgressControl />
    </section>
  );
}
