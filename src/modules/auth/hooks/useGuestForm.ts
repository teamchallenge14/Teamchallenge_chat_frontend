import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { guestSchema, type GuestInput, type GuestSchemaValues } from '@/modules/auth/schemas';

export const useGuestForm = () => {
  const form = useForm<GuestInput, unknown, GuestSchemaValues>({
    // Integrates Zod schema validation into react-hook-form
    resolver: zodResolver(guestSchema),

    // Explicit default values ensure predictable controlled inputs
    defaultValues: {
      login: '',
      firstName: '',
      lastName: '',
      gender: 'MALE',
      interests: [],
      description: '',
    },
    shouldUnregister: false,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  // Expose the form instance to be consumed by UI components
  return form;
};
