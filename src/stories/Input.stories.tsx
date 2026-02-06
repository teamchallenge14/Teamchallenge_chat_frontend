import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/ui/Input--old',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    value: '',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Enter text',
    value: 'Hello, World!',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text',
    value: 'Disabled input',
    disabled: true,
  },
};

export const WithCustomType: Story = {
  args: {
    placeholder: 'Enter email',
    value: 'example@example.com',
    type: 'email',
  },
};
