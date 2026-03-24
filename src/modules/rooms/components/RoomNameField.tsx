import { InputGroup, InputGroupInput } from '@/shared/ui/input-group';
import { Field, FieldLabel } from '@shared/ui/field';

import { type UseFormRegister, type FieldErrors } from 'react-hook-form';
import type { FormValues } from '../schema/createRoomSchema';

type Props = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const RoomNameField = ({ register, errors }: Props) => (
  <Field>
    <FieldLabel className="font-semibold">Room Name *</FieldLabel>
    <InputGroup className="bg-white shadow-sm">
      <InputGroupInput placeholder="Enter room name" {...register('roomName')} />
    </InputGroup>
    {errors.roomName && <p className="text-sm text-red-500">{errors.roomName.message}</p>}
  </Field>
);
