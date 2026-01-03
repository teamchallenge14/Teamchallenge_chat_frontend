import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginValues } from './login-schema';

/**
 * Custom hook that encapsulates all login form logic.
 *
 * Responsibilities:
 * - Initializes react-hook-form with Zod schema validation
 * - Provides strongly typed form state and handlers
 * - Defines default values and validation behavior
 *
 * This hook is part of the Auth feature's "model" layer
 * and should remain free of any UI-related logic.
 */
export const useLoginForm = () => {
  const form = useForm<LoginValues>({
    // Integrates Zod schema validation into react-hook-form
    resolver: zodResolver(loginSchema),

    // Explicit default values ensure predictable controlled inputs
    defaultValues: {
      email: '',
      password: '',
    },

    // Validation is triggered when an input loses focus,
    // providing a balanced user experience without excessive feedback
    mode: 'onBlur',
  });

  // Expose the form instance to be consumed by UI components
  return form;
};
