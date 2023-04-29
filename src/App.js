import "components/styles/base.scss";
import StepProgress from "components/main/checkout/StepProgress";
import StepOne from "components/main/checkout/StepOne";
import StepTwo from "components/main/checkout/StepTwo";
import StepThree from "components/main/checkout/StepThree";
import ProgressControl from "components/main/checkout/ProgressControl";

function App() {
  return (
    <div>
      <StepProgress />
      {/* <StepOne />
      <StepTwo /> */}
      <StepThree />
      <ProgressControl />
    </div>
  );
}

export default App;
