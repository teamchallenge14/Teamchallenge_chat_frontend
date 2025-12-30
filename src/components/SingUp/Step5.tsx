import * as Progress from '@radix-ui/react-progress';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { getInterest } from '@/app/api/api';
import { useEffect, useState } from 'react';
import type { Interest } from '@/types/Interest';

export const Step5 = () => {
  const [interest, setInterest] = useState<Interest[]>([]);

  const grouperInterestByCategiry = interest.reduce<Record<string, Interest[]>>((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInterest();
        setInterest(data);
        console.log('Fetched data:', data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <Header title="Complete Profile" />

      <Progress.Root
        className="relative h-[8px] w-full overflow-hidden bg-gray-200 rounded-full mb-[22px]"
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
          <div className="text-center mb-8">
            <h1 className="text-[20px] font-semibold leading-[40px] mb-2">Select your Interest</h1>
            <h2 className="font-normal text-[14px] text-gray-600">
              Choose topics you're interested in to find relevant chats
            </h2>
          </div>

          <div className='flex flex-col gap-[16px]'>
            {Object.entries(grouperInterestByCategiry).map(([categoty, items]) => (
              <div className="">
                <h3 className="text-left text-[14px] font-bold leading-[20px] text-[#000000]">{categoty}</h3>

                <div className='w-full gap-[6px] flex flex-wrap mt-[12px]'>
                  {items.map((item) => (
                    <Button variant="outline" key={item.id}>
                      {item.name}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button variant="default" className="mt-[16px] w-full">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
