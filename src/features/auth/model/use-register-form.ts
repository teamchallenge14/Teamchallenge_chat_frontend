import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registerSchema,
  registerInitialSchema,
  type RegisterValues,
  type RegisterInput,
  type RegisterInitialValues,
  type RegisterInitialInput, // import input type
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
export const useRegisterInitialForm = () => {
  const form = useForm<RegisterInitialInput, unknown, RegisterInitialValues>({
    resolver: zodResolver(registerInitialSchema),

    // Explicit default values ensure predictable controlled inputs
    defaultValues: {
      email: '',
      password: '',
      login: '',
    },
    shouldUnregister: false,
    // Validation is triggered when an input loses focus,
    // providing a balanced user experience without excessive feedback
    mode: 'onBlur',
  });

  return form;
};

export const useRegisterForm = () => {
  const form = useForm<RegisterInput, unknown, RegisterValues>({
    // Integrates Zod schema validation into react-hook-form
    resolver: zodResolver(registerSchema),

    // Explicit default values ensure predictable controlled inputs
    defaultValues: {
      // email: '',
      // password: '',
      // login: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: 'MALE',
      description: '',
    },
    shouldUnregister: false,
    // Validation is triggered when an input loses focus,
    // providing a balanced user experience without excessive feedback
    mode: 'onBlur',
  });

  // Expose the form instance to be consumed by UI components
  return form;
};
