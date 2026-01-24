import { useState } from 'react';
import { GuestUserName } from './GuestUserName';

export const Guest = () => {
  const [step, setStep] = useState(1);
  return <div>{step === 1 && <GuestUserName setStep={setStep} />}</div>;
};
