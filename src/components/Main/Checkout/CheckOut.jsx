import StepProgress from "components/Main/Checkout/StepProgress/StepProgress.jsx";
import StepOne from "components/Main/Checkout/Steps/StepOne";
import StepTwo from "components/Main/Checkout/Steps/StepTwo";
import StepThree from "components/Main/Checkout/Steps/StepThree";
import ProgressControl from "components/Main/Checkout/ProgressControl/ProgressControl";
import { useState } from "react"

export default function CheckOut() {
  const [currentStep, setCurrentStep] = useState(1)
  function changeStep(e) {
    if (e.target.className.includes('next')) {
      setCurrentStep(currentStep + 1)
    }else if (e.target.className.includes('prev')) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      <StepProgress currentStep={currentStep}/>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      <ProgressControl changeStep={changeStep} currentStep={currentStep}/>
    </section>
  );
}
