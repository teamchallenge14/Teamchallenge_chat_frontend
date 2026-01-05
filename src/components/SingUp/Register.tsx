import { useState } from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';
import type { SingUp } from '@/types/SingUp';
import { singUp } from '@/app/api/api';

export const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SingUp>({
    email: '',
    login: '',
    password: '',
    // firstName: '',
    // secondName: '',
    // description: '',
    // age: 0,
    // gender: '',
  });
  console.log(step);

  const updateField = <K extends keyof SingUp>(key: K, value: SingUp[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCreateAcount = async () => {
    try {
      const response = await singUp(formData);
      console.log(response);
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div>
      {step === 1 && (
        <Step1
          email={formData.email}
          password={formData.password}
          onEmailChange={(v) => updateField('email', v)}
          onPasswordChange={(v) => updateField('password', v)}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && <Step2 onNext={() => setStep(step + 1)} />}
      {step === 3 && (
        <Step3
          login={formData.login}
          onLoginChange={(v) => updateField('login', v)}
          handleCreateAcount={handleCreateAcount}
          onNext={() => setStep(step + 1)}
        />
      )}
      {step === 4 && <Step4 onNext={() => setStep(step + 1)} />}
      {step === 5 && <Step5 />}
      {/* {step === 6 && <FinalyWindow />} */}
      {/* {step === 3 && <Step3 data={formData} setData={setFormData} />} */}
      {/* <div className="flex gap-2 mt-4">
        {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
        {step < 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
        {step === 3 && <button type="submit">Finish</button>}
      </div> */}
    </div>
  );
};
