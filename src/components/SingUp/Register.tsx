import { useState } from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

export const Register = () => {
  const [step, setStep] = useState(1);
  // const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  console.log(step);
  return (
    <div>
      {step === 1 && <Step1 onNext={() => setStep(step + 1)} />}
      {step === 2 && <Step2 onNext={() => setStep(step + 1)} />}
      {step === 3 && <Step3 />}
      {/* {step === 3 && <Step3 data={formData} setData={setFormData} />} */}
      {/* <div className="flex gap-2 mt-4">
        {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
        {step < 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
        {step === 3 && <button type="submit">Finish</button>}
      </div> */}
    </div>
  );
};
