import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registerSchema,
  type RegisterValues,
  type RegisterInput, // import input type
} from './register-schema';

/**
 * Custom hook that encapsulates all register form logic.
 *
 * Responsibilities:
 * - Initializes react-hook-form with Zod schema validation
 * - Provides strongly typed form state and handlers
 * - Defines default values and validation behavior
 *
 * This hook is part of the Auth feature's "model" layer
 * and should remain free of any UI-related logic.
 */
export const useRegisterForm = () => {
  const form = useForm<RegisterInput, unknown, RegisterValues>({
    // Integrates Zod schema validation into react-hook-form
    resolver: zodResolver(registerSchema),

    // Explicit default values ensure predictable controlled inputs
    defaultValues: {
      email: '',
      password: '',
      login: '',
      name: '',
      surname: '',
      age: '',
      gender: 'MALE',
      bio: '',
    },

    // Validation is triggered when an input loses focus,
    // providing a balanced user experience without excessive feedback
    mode: 'onBlur',
  });

  // Expose the form instance to be consumed by UI components
  return form;
};
