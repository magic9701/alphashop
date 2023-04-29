import "components/styles/base.scss";
import StepProgress from "components/main/checkout/StepProgress";
import StepOne from "components/main/checkout/StepOne";
import StepTwo from "components/main/checkout/StepTwo";

function App() {
  return (
    <div>
      <StepProgress />
      {/* <StepOne /> */}
      <StepTwo />
    </div>
  );
}

export default App;
