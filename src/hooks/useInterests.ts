import { getInterest, getUserById, setUserInterests } from '@/app/api/api';
import { useUserID } from '@/store/user-store';
import type { Interest } from '@/types/Interest';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useInterests = () => {
  const userId = useUserID();

  const {
    data: interests = [],
    isLoading,
    isError,
  } = useQuery<Interest[]>({
    queryKey: ['interests'],
    queryFn: getInterest,
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
    queryFn: () => getUserById(userId as string),
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
    }) => setUserInterests(userId, payload),
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

  return {
    interests,
    isLoading,
    isError,
    selectedInterests,
    toggleInterest,
    grouperInterestByCategiry,
    formatCategory,
    handleSubmit,
    // isPending: submitInterestsMutation.isPending,
    submitInterestsMutation,
  };
};
