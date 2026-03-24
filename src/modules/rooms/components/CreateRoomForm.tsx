import { Button } from '@/shared/ui';
import { AgeRangeField } from './AgeRangeField';
import { RoomNameField } from './RoomNameField';
import { RoomTypeField } from './RoomTypeField';
import { LanguagesField } from './LanguagesField';
import { CategoriesField } from './CategoriesField';
import { AvatarField } from './AvatarField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import type { FormValues } from '../schema/createRoomSchema';
import { formSchema } from '../schema/createRoomSchema';
import type { ICategory } from '../types/category';
import { initialCategories } from '../constants/languages';

export const CreateRoomForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomName: '',
      isPublic: true,
      ageRange: [18, 40],
      language: 'EN',
      categories: initialCategories,
    },
  });

  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = form;

  const categories = useWatch({ control, name: 'categories' }) as ICategory[];

  const deleteFromCategory = (name: string) => {
    setValue(
      'categories',
      categories.filter((c) => c.name !== name),
      { shouldValidate: true },
    );
  };

  const onSubmit = (values: FormValues) => {
    const payload = {
      name: values.roomName,
      type: values.isPublic ? 'PUBLIC' : 'PRIVATE',
      minAge: values.ageRange[0],
      maxAge: values.ageRange[1],
      language: values.language,
      interestIds: values.categories.map((c) => c.id),
    };
    console.log(payload);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-4 flex flex-1 flex-col gap-4 py-6">
      <AvatarField />
      <RoomNameField register={register} errors={errors} />
      <RoomTypeField control={control} />
      <AgeRangeField control={control} errors={errors} />
      <LanguagesField control={control} errors={errors} />
      <CategoriesField
        categories={categories}
        errors={errors}
        deleteFromCategory={deleteFromCategory}
      />
      <Button type="submit">Create Room</Button>
    </form>
  );
};
