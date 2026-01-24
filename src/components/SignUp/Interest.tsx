import * as Progress from '@radix-ui/react-progress';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { getInterest, getUserById, setUserInterests } from '@/app/api/api';
import React, { useEffect, useState } from 'react';
import type { Interest } from '@/types/Interest';
import { useNavigate } from 'react-router-dom';

interface InteresProps {
  userId: string | null;
}

export const Interes: React.FC<InteresProps> = ({ userId }) => {
  const [interest, setInterest] = useState<Interest[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const navigate = useNavigate();
  const grouperInterestByCategiry = interest.reduce<Record<string, Interest[]>>((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) {
        console.error('User ID is missing in URL params');
        return;
      }

      try {
        const data = await getUserById(userId);
        console.log('Fetched user:', data);
        // якщо у користувача вже є інтереси встановлюю їх як вибрані
        // if (data.interests && data.interests.length > 0) {
        //   setSelectedInterests(data.interests.map((int: Interest) => int.id));
        // }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [userId]);

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

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interestId)) {
        return prev.filter((id) => id !== interestId);
      } else {
        return [...prev, interestId];
      }
    });
  };

  const handleSubmit = async () => {
    if (!userId) {
      console.error('User ID is missing');
      alert('User ID is missing. Please login again.');
      return;
    }

    console.log('Selected interests:', selectedInterests);

    if (selectedInterests.length === 0) {
      alert('Please select at least one interest');
      return;
    }

    try {
      const result = await setUserInterests(userId, selectedInterests);
      console.log('Interests saved successfully:', result);
      // dashboard або іншу сторінку !!!!!
      navigate('/successResiter');
    } catch (error) {
      console.error('Error saving interests:', error);
    }
  };
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
                  {categoty}
                </h3>

                <div className="mt-[12px] flex w-full flex-wrap gap-[6px]">
                  {items.map((item) => (
                    <Button
                      variant={selectedInterests.includes(item.id) ? 'default' : 'outline'}
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
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
