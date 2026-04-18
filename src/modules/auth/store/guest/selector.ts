import { registerStore } from './store';

export const useGuestCurrentStep = () => registerStore((state) => state.step);
