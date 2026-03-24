import { Button } from '@/shared/ui/Button/button';
import { Field, FieldDescription, FieldLabel } from '@/shared/ui/field';
import type { FieldErrors } from 'react-hook-form';
import type { FormValues } from '../schema/createRoomSchema';
import type { ICategory } from '../types/category';

type Props = {
  errors: FieldErrors<FormValues>;
  categories: ICategory[];
  deleteFromCategory: (name: string) => void;
};

export const CategoriesField = ({ errors, categories, deleteFromCategory }: Props) => {
  return (
    <Field className="gap-1">
      <FieldLabel className="font-semibold">Categories *</FieldLabel>
      <FieldDescription>Categories are auto-selected based on your interests</FieldDescription>
      <ul className="mb-4 mt-2 flex gap-2">
        {categories.map((category: ICategory) => (
          <Button
            type="button"
            className="shadow-md"
            key={category.id}
            onClick={() => deleteFromCategory(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </ul>
      {errors.categories && <p className="text-sm text-red-500">{errors.categories.message}</p>}
    </Field>
  );
};
