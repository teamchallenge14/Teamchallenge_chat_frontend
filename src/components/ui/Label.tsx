import * as RadixLabel from '@radix-ui/react-label';
import type { FC, ReactNode } from 'react';

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

export const Label: FC<LabelProps> = ({ htmlFor, children }) => (
  <RadixLabel.Root htmlFor={htmlFor} className="mb-[12px] flex text-left text-sm font-medium">
    {children}
  </RadixLabel.Root>
);
