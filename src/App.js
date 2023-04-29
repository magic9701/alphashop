import "components/styles/base.scss";
import StepProgress from "components/main/checkout/StepProgress";
import StepOne from "components/main/checkout/StepOne";
import StepTwo from "components/main/checkout/StepTwo";
import StepThree from "components/main/checkout/StepThree";

function App() {
  return (
    <div>
      <StepProgress />
      {/* <StepOne /> */}
      {/* <StepTwo /> */}
      <StepThree />
    </div>
  );
}

export default App;
