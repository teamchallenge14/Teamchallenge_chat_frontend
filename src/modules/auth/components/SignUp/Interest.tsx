import { Button } from '../../../../shared/ui/Button/button';
import React, { useEffect, useRef, useState } from 'react';
import type { Interest } from '@/types/Interest';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useAuthUserID } from '@/modules/auth/store/authStore';
import { AuthLayout } from '../../layouts';
import { SignUpStepsEnum } from '../../types/@auth.types';
import { getInterestAsync } from '@/modules/interests/api/apiInterests';
import { apiUsers } from '@/modules/users/api/apiUsers';

export const Interes: React.FC = () => {
  const userId = useAuthUserID();

  const {
    data: interests = [],
    isLoading,
    isError,
  } = useQuery<Interest[]>({
    queryKey: ['interests'],
    queryFn: getInterestAsync,
  });

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const hasInitialized = useRef(false);
  const navigate = useNavigate();

  const formatCategory = (category: string): string => {
    return category
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const grouperInterestByCategiry = interests.reduce<Record<string, Interest[]>>((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => apiUsers.getUserById(userId as string),
    enabled: !!userId,
  });

  // ініціалізую вибрані інтереси тільки один раз
  useEffect(() => {
    if (user?.interests?.length && !hasInitialized.current) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedInterests(user.interests.map((int: Interest) => int.id));
      hasInitialized.current = true;
    }
  }, [user]);

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interestId)) {
        return prev.filter((id) => id !== interestId);
      } else {
        return [...prev, interestId];
      }
    });
  };

  const submitInterestsMutation = useMutation({
    mutationFn: ({
      userId,
      payload,
    }: {
      userId: string;
      payload: { add?: string[]; remove?: string[] };
    }) => apiUsers.userInterests(userId, payload),
    onSuccess: (response) => {
      console.log('Interests saved successfully:', response);
      navigate('/successResiter');
    },
    onError: (error) => {
      console.error('Error saving interests:', error);
    },
  });

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

    submitInterestsMutation.mutate({
      userId,
      payload: { add: selectedInterests },
    });
  };

  if (isLoading) {
    return <div>Loading interests...</div>;
  }

  if (isError) {
    return <div>Error loading interests. Please try again later.</div>;
  }

  return (
    <AuthLayout flow={'signup'} step={SignUpStepsEnum.ENTER_INTERESTS}>
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
    </AuthLayout>
  );
};
