import React from 'react';
import * as Progress from '@radix-ui/react-progress';

interface IProgressBarProps {
  value: number;
}

export const ProgressBar: React.FC<IProgressBarProps> = ({ value }) => {
  return (
    <Progress.Root
      className="relative h-[8px] w-full overflow-hidden rounded-full bg-gray-200"
      value={value}
    >
      <Progress.Indicator
        className="h-full bg-black transition-transform"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </Progress.Root>
  );
};
