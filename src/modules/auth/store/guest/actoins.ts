import { registerStore } from './store';

export const useGuestSetStep = () => registerStore((state) => state.setStep);
