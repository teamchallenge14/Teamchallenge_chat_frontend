import * as RadixLabel from '@radix-ui/react-label';
import type { FC, ReactNode } from 'react';

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

export const Label: FC<LabelProps> = ({ htmlFor, children }) => (
  <RadixLabel.Root htmlFor={htmlFor} className="text-sm font-medium text-left flex mb-[12px]">
    {children}
  </RadixLabel.Root>
);
