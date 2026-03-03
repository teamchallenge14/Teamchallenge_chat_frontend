import { Button } from '../ui/button';
import React from 'react';
import { RegisterLayout } from '../ui/layouts';
import { RegisterStepsEnum } from '@/store/@types';
import { useInterests } from '@/hooks/useInterests';

export const Interes: React.FC = () => {
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
    <RegisterLayout step={RegisterStepsEnum.ENTER_INTERESTS}>
      <div className="mt-[22px] flex flex-col items-center justify-center">
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
    </RegisterLayout>
  );
};
