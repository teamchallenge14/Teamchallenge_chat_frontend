import * as Progress from '@radix-ui/react-progress';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import React from 'react';

import { useInterests } from '@/hooks/useInterests';

export const GuestInteres: React.FC = () => {
  const {
    isLoading,
    isError,
    selectedInterests,
    toggleInterest,
    grouperInterestByCategiry,
    formatCategory,
    handleSubmit,
    // isPending,
    submitInterestsMutation,
  } = useInterests();

  if (isLoading) {
    return <div>Loading interests...</div>;
  }

  if (isError) {
    return <div>Error loading interests. Please try again later.</div>;
  }
  return (
    <div className="flex flex-col">
      <Header title="Complete Profile" />

      <Progress.Root
        className="relative mb-[22px] h-[8px] w-full overflow-hidden rounded-full bg-gray-200"
        value={66}
      >
        <Progress.Indicator
          className="h-full w-full bg-black transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 - 100}%)` }}
        />
      </Progress.Root>

      <div className="flex flex-col items-center justify-center">
        {/*flex-1 */}
        <div className="w-full max-w-md text-center">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-[20px] font-semibold leading-[40px]">Select your Interest</h1>
            <h2 className="text-[14px] font-normal text-gray-600">
              Choose topics you're interested in to find relevant chats
            </h2>
          </div>

          <div className="flex flex-col gap-[16px]">
            {Object.entries(grouperInterestByCategiry).map(([categoty, items]) => (
              <div key={categoty}>
                <h3 className="text-left text-[14px] font-bold leading-[20px] text-[#000000]">
                  {formatCategory(categoty)}
                </h3>

                <div className="mt-[12px] flex w-full flex-wrap gap-[6px]">
                  {items.map((item) => (
                    <Button
                      variant={selectedInterests.includes(item.id) ? 'active' : 'outline'}
                      key={item.id}
                      onClick={() => toggleInterest(item.id)}
                      type="button"
                    >
                      {item.name}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button
            type="submit"
            variant="default"
            className="mt-[16px] w-full"
            onClick={handleSubmit}
            disabled={submitInterestsMutation.isPending}
          >
            {submitInterestsMutation.isPending ? 'Saving...' : 'Continue'}
          </Button>
        </div>
      </div>
    </div>
  );
};
