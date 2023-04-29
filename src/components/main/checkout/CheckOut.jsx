import StepProgress from "components/main/checkout/StepProgress";
import StepOne from "components/main/checkout/StepOne";
import StepTwo from "components/main/checkout/StepTwo";
import StepThree from "components/main/checkout/StepThree";
import ProgressControl from "components/main/checkout/ProgressControl";

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
