import { AGE_OPTIONS } from '@/features/auth/model/register-schema';
import React, { useState } from 'react';

interface DropdownProps {
  value?: number;
  onChange?: (value: number) => void;
  error?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ value, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelected = (selectedValue: number) => {
    onChange?.(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Кнопка для відкриття/закриття */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-[36px] w-full rounded-lg border border-gray-300 bg-white px-4 text-left shadow-sm hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {value || 'Select an option'}
        <span className="absolute right-3 top-3">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Випадаючий список */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg">
          {/* Скрол контейнер */}
          <div className="max-h-64 overflow-y-auto">
            {/* Кастомний скролбар */}
            <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {AGE_OPTIONS.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    handleSelected(option);
                  }}
                  className={`cursor-pointer px-4 py-3 transition-colors hover:bg-gray-100 ${
                    value === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
