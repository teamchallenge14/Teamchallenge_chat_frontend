import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '@/components/ui/InputField';
import type { InputFieldType } from '@/components/ui/InputField/inputField.types';

const meta: Meta<typeof InputField> = {
  title: 'Components/ui/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'input-field',
    value: '',
    placeholder: 'Enter text...',
    isError: false,
    onChange: (value: string) => {
      console.log('onChange:', value);
    },
  },
  argTypes: {
    fieldType: {
      control: 'select',
      options: ['text', 'password', 'email', 'search', 'textarea'],
    },
    label: {
      control: 'text',
    },
    labelClassName: {
      control: 'text',
      if: { arg: 'label', truthy: true },
    },
    rows: {
      control: { type: 'number', min: 1, max: 10 },
      if: { arg: 'fieldType', eq: 'textarea' },
    },
    isError: {
      control: 'boolean',
    },
    errorMessage: {
      control: 'text',
      if: { arg: 'isError', truthy: true },
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

//
// ────────────────────────────────────────────────────────────────
// Stories
// ────────────────────────────────────────────────────────────────
//

export const Text: Story = {
  args: {
    fieldType: 'text',
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const Password: Story = {
  args: {
    fieldType: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    isInfo: true,
    infoText: 'Some password info',
  },
};

export const Email: Story = {
  args: {
    fieldType: 'email',
    label: 'Email',
    placeholder: 'example@mail.com',
  },
};

export const Search: Story = {
  args: {
    fieldType: 'search',
    placeholder: 'Search...',
  },
};

export const Textarea: Story = {
  args: {
    fieldType: 'textarea',
    label: 'Message',
    placeholder: 'Write your message...',
    rows: 5,
  } as InputFieldType,
};

export const Error: Story = {
  args: {
    fieldType: 'text',
    label: 'Email',
    value: 'wrong-email',
    isError: true,
    errorMessage: 'Invalid email address',
  },
};

export const WithoutLabel: Story = {
  args: {
    fieldType: 'text',
    placeholder: 'Input without label',
  },
};
